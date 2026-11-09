(async function () {
  const log = [];
  const errs = [];
  window.addEventListener('error', function (e) {
    errs.push('E:' + (e.message || '') + '@' + e.lineno);
  });
  window.addEventListener('unhandledrejection', function (e) {
    const r = e.reason;
    errs.push('R:' + (r && r.message ? r.message : r));
  });
  const sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  const ok = function (name, cond, extra) {
    log.push((cond ? 'PASS ' : 'FAIL ') + name + (extra ? ' [' + extra + ']' : ''));
  };
  const $id = function (id) { return document.getElementById(id); };

  const report = function () {
    ok('runtime.errors', errs.length === 0, errs.join(' || ') || 'none');
    const pre = document.createElement('pre');
    pre.id = 'SMOKE';
    pre.textContent = 'SMOKE_BEGIN\n' + log.join('\n') + '\nSMOKE_END';
    document.body.appendChild(pre);
  };

  /* ── 附掛測試：GIF 擷取（captureGif 重構後的路徑，可用 #gif 單獨跑）
     gifshot 真正編碼在 headless 下不會完成，這裡用假 createGIF 驗證
     「擷取影格 → 回傳 dataUrl → 還原畫面」與分享流程的邏輯 ── */
  if (location.hash === '#gif') {
    await sleep(3000);
    ok('gif.shotLoaded', typeof gifshot !== 'undefined', 'gifshot=' + typeof gifshot);
    $id('enterPlayer').click();
    await sleep(400);
    await stopPlayback();
    state.loop = false;
    await sleep(200);

    const idxBefore = state.currentFrame;
    const steps = state.frames.length;
    let seen = null;
    const realCreateGIF = gifshot && gifshot.createGIF;
    if (gifshot) {
      gifshot.createGIF = function (opts, cb) {
        seen = opts;
        setTimeout(function () {
          cb({ error: false, image: 'data:image/gif;base64,SMOKE' });
        }, 10);
      };
    }
    const realDownload = window.downloadDataUrl;
    const downloaded = [];
    window.downloadDataUrl = function (url, name) { downloaded.push(name); };
    const realOpen = window.open;
    const opened = [];
    window.open = function (url) { opened.push(url); return {}; };

    let res = null;
    let gifErr = null;
    try { res = await captureGif(); } catch (e) { gifErr = e; }
    ok('gif.resolved', !!res, gifErr ? String((gifErr && gifErr.message) || gifErr) : 'ok');
    ok('gif.dataUrl', !!res && String(res.dataUrl).indexOf('data:image/gif') === 0,
      res ? String(res.dataUrl).slice(0, 26) : 'n/a');
    ok('gif.filename', !!res && /\.gif$/i.test(String(res.filename)), res ? res.filename : 'n/a');
    ok('gif.captureArgs', !!seen && seen.images.length >= steps * 2 &&
      seen.gifWidth > 0 && seen.gifHeight > 0 && seen.interval === 0.1,
      seen ? (seen.images.length + ' imgs · ' + seen.gifWidth + 'x' + seen.gifHeight + ' · i=' + seen.interval) : 'n/a');
    ok('gif.frameRestored', state.currentFrame === idxBefore, state.currentFrame + ' vs ' + idxBefore);
    ok('gif.exportingCleared', state.exporting === false);
    ok('gif.loaderHidden', $id('loader') ? $id('loader').hidden === true : true);

    let shareErr = null;
    try { await shareTactic(); } catch (e) { shareErr = e; }
    ok('share.noThrow', shareErr === null, shareErr ? String((shareErr && shareErr.message) || shareErr) : 'ok');
    ok('share.downloaded', downloaded.length >= 1, downloaded.join(',') || 'none');
    ok('share.whatsappOpened', opened.length >= 1 && /wa\.me/.test(opened[0] || ''),
      (opened[0] || 'none').slice(0, 40));
    ok('share.frameRestoredAgain', state.currentFrame === idxBefore, String(state.currentFrame));
    ok('share.exportingCleared', state.exporting === false);

    if (realCreateGIF) gifshot.createGIF = realCreateGIF;
    window.downloadDataUrl = realDownload;
    window.open = realOpen;

    report();
    return;
  }

  await sleep(3000);                      /* 等 CDN 腳本 + 開機流程 */

  /* 清掉上一輪煙霧測試留下的本機紀錄，讓計數類斷言可重複 */
  try { window.localStorage.clear(); } catch (err) { /* noop */ }

  ok('boot.fabric', typeof fabric !== 'undefined', 'fabric=' + typeof fabric);
  ok('boot.canvasEl', !!$id('board') || !!document.querySelector('canvas'));
  ok('boot.splashOpen', $id('splash') ? !$id('splash').hidden : false);
  log.push('INFO boot.frames=' + state.frames.length + ' playing=' + state.playing);

  /* ── 1. 球員模式：唯讀 ── */
  $id('enterPlayer').click();
  await sleep(400);
  ok('player.bodyMode', document.body.dataset.mode === 'player', document.body.dataset.mode);
  ok('player.canEditFalse', canEdit() === false);
  /* US-139：唯讀 → 底部是「播放 4 鍵」、面板與編輯 4 鍵都不進版面 */
  ok('player.playKeysShown', document.body.dataset.keys === 'play', document.body.dataset.keys);
  ok('player.panelHidden', getComputedStyle($id('toolPanel')).display === 'none');
  ok('player.editKeysHidden', getComputedStyle($id('editKeys')).display === 'none');

  /* -- 1b. 唯讀球員按工具 --> 引導到繪製模式（不再跳教練密碼框） -- */
  const objsBefore = canvas.getObjects().length;
  const toolBtn = document.querySelector('.tool[data-tool="pass"]');
  const nodeBtn = document.querySelector('.node[data-tool]');
  if (toolBtn) toolBtn.click();
  await sleep(150);
  ok('gate.toolBlocked', state.tool === 'select', state.tool);
  ok('gate.toolToast', /繪製模式/.test($id('toastStack').textContent || ''),
    ($id('toastStack').textContent || 'none').slice(0, 34));
  ok('gate.noPasswordModal', $id('pwModal').hidden === true);
  if (nodeBtn) nodeBtn.click();
  await sleep(150);
  ok('gate.noNodeAdded', canvas.getObjects().length === objsBefore,
    canvas.getObjects().length + ' vs ' + objsBefore);

  /* -- 1c. US-137 手冊抽屜瘦身：只剩「標題＋✕＋清單」，沒有 ↻／🛠工具／⎋身分／✏️提案／新增區塊 -- */
  ok('pb.refreshRemoved', !$id('pbRefresh'));
  ok('pb.toolsRowRemoved', !$id('pbTools') && !$id('pbPropose') && !$id('pbSwitchRole'),
    [$id('pbTools'), $id('pbPropose'), $id('pbSwitchRole')].map(function (el) { return !!el; }).join(','));
  ok('pb.newRowRemoved', !$id('pbNewTactic') && !$id('pbNameInput'),
    String(!!document.querySelector('.pb-new-row')) + '/' + String(!!$id('pbNameInput')));
  const pbHead = $id('playbook') ? $id('playbook').querySelector('.pb-head') : null;
  ok('pb.headOnlyTitleAndClose', !!pbHead && !!pbHead.querySelector('h2') &&
    pbHead.querySelectorAll('button').length === 1 &&
    pbHead.querySelector('button').id === 'pbClose',
    pbHead ? pbHead.querySelectorAll('button').length + ' btn' : 'no head');
  ok('pb.listKept', !!$id('pbList'));

  /* ── 2. ＋ 新增 → 建立新戰術對話框（US-139：只剩名稱＋作者）→ 繪製模式 ── */
  /* 版面量測工具（後面的手機／桌機斷言都靠這兩個） */
  const mobile = window.matchMedia('(max-width: 767px)').matches;
  const vis = function (el) { return !!el && el.offsetParent !== null; };
  log.push('INFO viewport=' + window.innerWidth + 'x' + window.innerHeight + ' mobile=' + mobile);

  await stopPlayback();
  await sleep(300);
  $id('btnNewTactic').click();
  await sleep(400);
  ok('create.modalOpen', $id('createModal').hidden === false);
  ok('create.namePrefilled', ($id('createName').value || '').length > 0, $id('createName').value);
  ok('create.rosterOptions', !!$id('createPerson') && $id('createPerson').options.length === 19,
    $id('createPerson') ? $id('createPerson').options.length + ' opts' : 'missing');
  /* US-138：🏀 教練 (Coach) 置頂，其餘 18 位球員 */
  ok('create.coachOptionFirst', !!$id('createPerson') &&
    $id('createPerson').options[0].value === 'coach' &&
    ($id('createPerson').options[0].textContent || '').indexOf('教練') >= 0,
    $id('createPerson') ? $id('createPerson').options[0].textContent : 'missing');
  ok('create.twoFields', document.querySelectorAll('#createForm .save-field').length === 2,
    document.querySelectorAll('#createForm .save-field').length + ' fields');
  ok('create.noDefensePicker', !$id('createDefense'));
  /* US-138：球員模式 → 作者預設球員（不會誤選教練） */
  ok('create.authorDefaultPlayer', !!$id('createPerson') && $id('createPerson').value !== 'coach',
    $id('createPerson') ? $id('createPerson').value : 'missing');
  /* 名稱必填：空白 → 留在對話框並顯示錯誤 */
  /* 名稱空白 → 不關框、顯示錯誤 */
  $id('createName').value = '   ';
  $id('createForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  await sleep(200);
  ok('create.nameRequired', $id('createModal').hidden === false &&
    ($id('createError').textContent || '').length > 0,
    $id('createError').textContent || 'no error');
  $id('createName').value = 'SMOKE 新戰術';
  $id('createPerson').value = '34';
  $id('createForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  await sleep(400);
  /* US-138：建立新戰術只確認一次（就是這張表單）→ 不應再跳「畫布會被清空」確認框 */
  ok('create.noSecondConfirm', $id('confirmModal').hidden === true);
  await sleep(1600);
  ok('create.modalClosed', $id('createModal').hidden === true);
  ok('create.tacticName', state.tacticName === 'SMOKE 新戰術', state.tacticName);
  ok('create.authorSet', !!state.tacticAuthor && state.tacticAuthor.no === 34,
    JSON.stringify(state.tacticAuthor));
  /* US-139：對話框不再選陣型 → 一律 2-1-2 開場，進畫布後可用 🛡 切換 */
  ok('create.defenseDefault212', state.tacticDefense === '212', String(state.tacticDefense));
  ok('create.freshStep1', state.frames.length === 1 &&
    String(state.frames[0].name) === '步驟 1', state.frames.length + ' steps');
  ok('draw.editing', state.editing === true);
  ok('draw.bodyEdit', document.body.dataset.edit === '1', document.body.dataset.edit);
  ok('draw.canEditTrue', canEdit() === true);
  /* US-139：底部切到「編輯 4 鍵」，播放 4 鍵退場；中間出現工具面板 */
  ok('draw.editKeysShown', document.body.dataset.keys === 'edit', document.body.dataset.keys);
  ok('draw.playKeysHidden', getComputedStyle($id('playKeys')).display === 'none');
  /* US-140：底部 4 鍵＝名單／陣型／畫筆／提交·發布；＋ 加步驟 移到球場下方的輕量條 */
  const ekIds = ['ekRoster', 'ekDefense', 'ekDraw', 'ekSave'];
  ok('editbar.fourKeys',
    ekIds.every(function (k) { return vis($id(k)); }) &&
    $id('editKeys').querySelectorAll('.ek-btn').length === 4,
    ekIds.map(function (k) { return vis($id(k)) ? 1 : 0; }).join(','));
  ok('editbar.fourKeysEven', (function () {
    const w = ekIds.map(function (k) { return Math.round($id(k).getBoundingClientRect().width); });
    return Math.max.apply(null, w) - Math.min.apply(null, w) <= 1;
  })(), ekIds.map(function (k) { return Math.round($id(k).getBoundingClientRect().width); }).join('/'));
  ok('editbar.fourKeysFit', ekIds.every(function (k) {
    const el = $id(k);
    return el.scrollWidth <= el.clientWidth + 1;
  }), ekIds.map(function (k) { return $id(k).scrollWidth + '>' + $id(k).clientWidth; }).join(' '));
  const addStrip = $id('ekAdd') ? $id('ekAdd').closest('.step-add') : null;
  ok('stepadd.inStrip', !!addStrip && vis(addStrip) && !!$id('ekAdd'), addStrip ? 'strip' : 'n/a');
  ok('stepadd.notInKeys', !$id('editKeys').contains($id('ekAdd')));
  ok('stepadd.beforePanel', !!addStrip && !!$id('toolPanel') &&
    !!(addStrip.compareDocumentPosition($id('toolPanel')) & Node.DOCUMENT_POSITION_FOLLOWING));
  ok('stepadd.count', ($id('saCount').textContent || '').indexOf('共 1 步') >= 0,
    ($id('saCount').textContent || '').trim());
  ok('draw.saveLabelProposal', ($id('ekSave').textContent || '').indexOf('提交審核') >= 0,
    ($id('ekSave').textContent || '').trim());
  ok('edit.exitLabel', ($id('btnNewTactic').textContent || '').indexOf('退出') >= 0,
    ($id('btnNewTactic').textContent || '').trim());
  ok('panel.stepDefault', document.body.dataset.panel === 'step' &&
    $id('tpStep').hidden === false && $id('tpRoster').hidden === true);
  ok('panel.stepInfoShown', vis($id('tpStepName')) && vis($id('tpStepDesc')) &&
    ($id('tpIndex').textContent || '').indexOf('步驟 1') >= 0,
    $id('tpIndex').textContent || 'n/a');
  /* US-142：面板裡舊的「待批核提案」列已移除（批核搬到頂部 🔔 待批審核中心） */
  ok('panel.noApproveRow', !$id('tpApprove'));
  /* 面板直接改步驟名稱／走位說明 → 寫回 frames[i]，卡片同步（不再跳 window.prompt） */
  $id('tpStepName').value = '擋拆起手';
  $id('tpStepName').dispatchEvent(new Event('input', { bubbles: true }));
  ok('panel.stepNameWrite', state.frames[0].name === '擋拆起手', String(state.frames[0].name));
  $id('tpStepDesc').value = '4 號上擋，1 號往右切入';
  $id('tpStepDesc').dispatchEvent(new Event('input', { bubbles: true }));
  ok('panel.stepDescWrite', state.frames[0].desc === '4 號上擋，1 號往右切入',
    String(state.frames[0].desc));
  const firstChipName = document.querySelector('#stepList .step-chip .step-name');
  ok('panel.chipFollows', !!firstChipName && (firstChipName.textContent || '') === '擋拆起手',
    firstChipName ? firstChipName.textContent : 'n/a');
  /* 球場下方的「＋ 加步驟」：追加第 2 步 → 步數同步 → 面板 ▶ 預覽（播放中底部換回播放 4 鍵） */
  $id('ekAdd').click();
  await sleep(500);
  ok('editbar.addStep', state.frames.length === 2, state.frames.length + ' steps');
  ok('stepadd.countFollows', ($id('saCount').textContent || '').indexOf('共 2 步') >= 0,
    ($id('saCount').textContent || '').trim());
  $id('tpPreview').click();
  await sleep(800);
  ok('panel.previewPlays', state.playing === true, String(state.playing));
  ok('panel.playKeysDuringPreview', document.body.dataset.keys === 'play' &&
    getComputedStyle($id('playKeys')).display !== 'none', document.body.dataset.keys);
  await stopPlayback();
  await sleep(600);
  ok('panel.previewStops', state.playing === false && document.body.dataset.keys === 'edit',
    state.playing + '/' + document.body.dataset.keys);

  /* ── US-136 頂部 Header 排版：左［隊徽＋隊名］　右［球員｜教練］滑塊 ＋ ［＋ 新增］ ── */
  const topbar = document.querySelector('.topbar');
  const tbRight = topbar ? topbar.querySelector('.topbar-right') : null;
  const mSwitch = topbar ? topbar.querySelector('.mode-switch') : null;
  const newBtn = $id('btnNewTactic');
  const storePill = $id('storePill');
  const brandEl = topbar ? topbar.querySelector('.brand') : null;
  const tbRect = topbar ? topbar.getBoundingClientRect() : null;
  const rOf = function (el) { return el ? el.getBoundingClientRect() : null; };
  ok('topbar.homeRemoved', !document.querySelector('.home-btn') && !$id('btnHome'));
  ok('topbar.switchRetained', vis(mSwitch));
  ok('topbar.newVisible', vis(newBtn));
  /* US-142：教練的「🔔 待批 (N)」插在滑塊與「＋ 新增」之間（球員隱藏，但節點固定在同一位置） */
  const pendingBtn = $id('btnPending');
  ok('topbar.pendingBetween', !!mSwitch && !!pendingBtn && !!newBtn &&
    mSwitch.nextElementSibling === pendingBtn && pendingBtn.nextElementSibling === newBtn,
    mSwitch && mSwitch.nextElementSibling ? mSwitch.nextElementSibling.id || mSwitch.nextElementSibling.className : 'n/a');
  ok('topbar.sameRow', !!mSwitch && !!newBtn &&
    Math.abs(rOf(mSwitch).top - rOf(newBtn).top) <= 2,
    mSwitch && newBtn ? Math.round(rOf(mSwitch).top) + '/' + Math.round(rOf(newBtn).top) : 'n/a');
  ok('topbar.heightMatch', !!mSwitch && !!newBtn &&
    Math.abs(rOf(mSwitch).height - rOf(newBtn).height) <= 1,
    mSwitch && newBtn ? Math.round(rOf(mSwitch).height) + ' vs ' + Math.round(rOf(newBtn).height) : 'n/a');
  ok('topbar.newRightOfSwitch', !!mSwitch && !!newBtn && rOf(newBtn).left >= rOf(mSwitch).right - 1);
  ok('topbar.leftBrandFirst', !!brandEl && !!mSwitch && rOf(brandEl).left < rOf(mSwitch).left);
  ok('topbar.rightAligned', !!tbRight && !!tbRect &&
    Math.abs((tbRect.right - rOf(tbRight).right) - parseFloat(getComputedStyle(topbar).paddingRight)) <= 2,
    tbRight ? Math.round(tbRect.right - rOf(tbRight).right) + 'px gutter' : 'n/a');
  ok('topbar.noOverflow', !!topbar && topbar.scrollWidth <= topbar.clientWidth + 1,
    topbar ? topbar.scrollWidth + ' vs ' + topbar.clientWidth : 'n/a');
  /* US-139：此刻在繪製模式 → 右上角是「✕ 退出」（唯讀時才是「＋ 新增」，見 exit.labelBack） */
  ok('topbar.exitLabel', !!newBtn && /退出/.test(newBtn.textContent || ''),
    newBtn ? (newBtn.textContent || '').trim() : 'n/a');
  ok('topbar.storePillAfterNew', !vis(storePill) ||
    rOf(storePill).left >= rOf(newBtn).right - 1,
    vis(storePill) ? Math.round(rOf(storePill).left - rOf(newBtn).right) + 'px gap' : 'hidden');

  if (mobile) {
    const firstMShort = topbar ? topbar.querySelector('.mode-btn .mb-short') : null;
    const firstMFull = topbar ? topbar.querySelector('.mode-btn .mb-full') : null;
    ok('mobile.modeSwitchVisible', vis(mSwitch));
    ok('mobile.modeLabelShort', !!firstMShort && /^球員$/.test((firstMShort.textContent || '').trim()),
      firstMShort ? (firstMShort.textContent || '').trim() : 'n/a');
    ok('mobile.modeLabelFullHidden', !!firstMFull && getComputedStyle(firstMFull).display === 'none');
    /* US-139：繪製中 → 右上角是「✕ 退出」（手機顯示長標籤） */
    ok('mobile.exitLabelLong', !!newBtn && /退出/.test(newBtn.textContent || ''),
      newBtn ? (newBtn.textContent || '').trim() : 'n/a');
  } else {
    ok('topbar.platformDesktop', !mobile);
  }
  if (mobile) {
    /* US-139：繪製中＝面板（步驟資訊）＋ 編輯 4 鍵；播放 4 鍵整組退場 */
    ok('mobile.panelVisible', vis($id('toolPanel')));
    ok('mobile.panelNoOverflow',
      $id('toolPanel').scrollWidth <= $id('toolPanel').clientWidth + 1,
      $id('toolPanel').scrollWidth + '>' + $id('toolPanel').clientWidth);
    ok('mobile.playKeysHidden', getComputedStyle($id('playKeys')).display === 'none');
    ok('mobile.editKeysFixed',
      ekIds.every(function (k) { return vis($id(k)); }) &&
      $id('editKeys').querySelectorAll('.ek-btn').length === 4,
      ekIds.map(function (k) { return vis($id(k)) ? 1 : 0; }).join(','));
    ok('mobile.keysEven', (function () {
      const w = ekIds.map(function (k) { return $id(k).getBoundingClientRect().width; });
      return Math.max.apply(null, w) - Math.min.apply(null, w) <= 1.5;
    })(), ekIds.map(function (k) { return Math.round($id(k).getBoundingClientRect().width); }).join('/'));
    ok('mobile.keysNoOverflow',
      $id('editKeys').scrollWidth <= $id('editKeys').clientWidth + 1,
      $id('editKeys').scrollWidth + '>' + $id('editKeys').clientWidth);
    /* US-140：加步驟條在球場正下方＝面板之上（第一列），且不佔底部 4 鍵 */
    ok('mobile.stepAddAbovePanel',
      $id('ekAdd').getBoundingClientRect().bottom <= $id('toolPanel').getBoundingClientRect().top + 1 &&
      $id('ekAdd').getBoundingClientRect().top < $id('toolPanel').getBoundingClientRect().top,
      Math.round($id('ekAdd').getBoundingClientRect().bottom) + '<=' +
      Math.round($id('toolPanel').getBoundingClientRect().top));
    ok('mobile.quickSaveRemoved', !$id('btnQuickSave'));
    ok('mobile.newTacticVisible', vis($id('btnNewTactic')));
    ok('mobile.stepListVisible', vis($id('stepList')));
    ok('mobile.courtFitsViewport', $id('board').getBoundingClientRect().height > 120,
      String(Math.round($id('board').getBoundingClientRect().height)));

    /* 👥 球員陣容：面板接手步驟清單的位置（決策 A） */
    $id('ekRoster').click();
    await sleep(300);
    ok('panel.rosterToggle', $id('tpRoster').hidden === false && $id('tpStep').hidden === true,
      $id('tpRoster').hidden + '/' + $id('tpStep').hidden);
    ok('panel.rosterReplacesSteps', getComputedStyle($id('stepList')).display === 'none');
    ok('panel.rosterPressed', $id('ekRoster').getAttribute('aria-pressed') === 'true');
    ok('mobile.rosterRendered', $id('rosterGrid').children.length >= 10,
      $id('rosterGrid').children.length + ' players');
    $id('ekRoster').click();
    await sleep(300);
    ok('panel.rosterBack', $id('tpStep').hidden === false && vis($id('stepList')));

    /* 🛡 防守陣型：列出 5 個預設，點一下就套用並記進 state */
    $id('ekDefense').click();
    await sleep(300);
    ok('panel.defenseToggle', $id('tpDefense').hidden === false && $id('tpStep').hidden === true);
    ok('mobile.defenseButtons', document.querySelectorAll('#defGrid .def-btn').length === 5,
      document.querySelectorAll('#defGrid .def-btn').length + ' presets');
    const def23 = document.querySelector('#defGrid .def-btn[data-preset="23"]');
    if (def23) def23.click();
    await sleep(700);
    ok('panel.defenseApplied', state.tacticDefense === '23', String(state.tacticDefense));
    const def212 = document.querySelector('#defGrid .def-btn[data-preset="212"]');
    if (def212) def212.click();
    await sleep(700);
    ok('panel.defenseRestored', state.tacticDefense === '212', String(state.tacticDefense));
    $id('ekDefense').click();
    await sleep(300);
    ok('panel.defenseBack', $id('tpStep').hidden === false && vis($id('stepList')));

    /* 面板 ⚙ → 教練工具抽屜（線條／動作） */
    $id('tpTools').click();
    await sleep(350);
    ok('mobile.toolsDrawerOpens', $id('sidebar').classList.contains('is-open'),
      $id('sidebar').className);
    $id('pbScrim').click();
    await sleep(300);
    ok('mobile.toolsDrawerCloses', !$id('sidebar').classList.contains('is-open'),
      $id('sidebar').className);
  }

  /* ── US-137／US-139：繪製中的「教練工具」入口在任何寬度都到得了
     >1100px：右側第三欄；768～1100px：步驟列的 🛠 切換鈕＋右側抽屜；≤767px：面板的 ⚙ ── */
  if (!mobile) {
    const sideToggle = $id('sideToggle');
    const narrowDesk = window.innerWidth <= 1100;
    ok('tools.entryRule', narrowDesk
      ? vis(sideToggle)
      : getComputedStyle($id('sidebar')).display !== 'none',
      'w=' + window.innerWidth + ' toggle=' + (vis(sideToggle) ? 'shown' : 'hidden'));
    if (narrowDesk && vis(sideToggle)) {
      sideToggle.click();
      await sleep(350);
      ok('tools.toggleOpensDrawer', $id('sidebar').classList.contains('is-open'),
        $id('sidebar').className);
      $id('sideToggle').click();
      await sleep(300);
      ok('tools.toggleClosesDrawer', !$id('sidebar').classList.contains('is-open'),
        $id('sidebar').className);
    }
    /* 桌機：名單／防守陣型住在工具面板裡（不再佔右側第三欄） */
    ok('panel.desktopRoster', $id('rosterGrid').children.length >= 10,
      $id('rosterGrid').children.length + ' players');
    ok('panel.desktopDefense', document.querySelectorAll('#defGrid .def-btn').length === 5,
      document.querySelectorAll('#defGrid .def-btn').length + ' presets');
  }
  /* ── US-140：✏️ 走位畫筆 → 面板切出三種線條；選線即生效；再按一次收回並放下畫筆 ── */
  ok('draw.keyPresent', vis($id('ekDraw')), 'visible=' + vis($id('ekDraw')));
  $id('ekDraw').click();
  await sleep(300);
  ok('draw.panelToggle',
    document.body.dataset.panel === 'draw' && $id('tpDraw').hidden === false && $id('tpStep').hidden === true,
    document.body.dataset.panel + '/' + $id('tpDraw').hidden + '/' + $id('tpStep').hidden);
  ok('draw.defaultTool', state.tool === 'cut', String(state.tool));
  ok('draw.threeLines', document.querySelectorAll('#tpDraw .draw-btn[data-tool]').length === 3,
    document.querySelectorAll('#tpDraw .draw-btn[data-tool]').length + ' lines');
  ok('draw.keyOn', $id('ekDraw').classList.contains('is-on') &&
    $id('ekDraw').getAttribute('aria-pressed') === 'true',
    $id('ekDraw').className);
  const drawPass = document.querySelector('#tpDraw .draw-btn[data-tool="pass"]');
  if (drawPass) drawPass.click();
  await sleep(200);
  ok('draw.toolSwitch', state.tool === 'pass', String(state.tool));
  ok('draw.toolActive', !!drawPass && drawPass.classList.contains('is-active') &&
    document.querySelectorAll('#tpDraw .draw-btn.is-active').length === 1,
    document.querySelectorAll('#tpDraw .draw-btn.is-active').length + ' active');
  ok('draw.keyStillOn', $id('ekDraw').classList.contains('is-on'));
  $id('ekDraw').click();
  await sleep(300);
  ok('draw.backToStep', document.body.dataset.panel === 'step' && $id('tpStep').hidden === false &&
    state.tool === 'select', document.body.dataset.panel + '/' + state.tool);

  setTool('pass');
  await sleep(120);
  ok('draw.toolPass', state.tool === 'pass', state.tool);
  ok('draw.hintShown', ($id('boardHint').textContent || '').length > 0, $id('boardHint').textContent);
  setTool('select');
  await sleep(120);

  /* ── 3. 📤 提交審核 → 依作者直接寫入（不跳儲存對話框） ── */
  $id('ekSave').click();
  await sleep(1800);
  ok('submit.noDialog', $id('saveModal').hidden === true);
  ok('submit.pending', state.tacticStatus === 'pending', String(state.tacticStatus));
  ok('submit.recordId', !!state.tacticId, String(state.tacticId));
  ok('submit.authorKept', !!state.tacticAuthor && state.tacticAuthor.no === 34,
    JSON.stringify(state.tacticAuthor));
  /* US-139：存檔後「退出」不再倒回存檔前（快照已清） */
  ok('submit.snapshotCleared', state.returnTo === null);

  /* -- 提案在清單上的標記：未批核 + 提議人（US-142：提議人寫進標記，meta 不再重複 by） -- */
  await renderPlaybook();
  await sleep(250);
  const prow = document.querySelector('.pb-item[data-id="' + state.tacticId + '"]');
  ok('list.pendingTag', !!prow && !!prow.querySelector('.pb-pending-tag'),
    prow ? (prow.textContent || '').slice(0, 44) : 'no row');
  const ptag = prow ? prow.querySelector('.pb-pending-tag') : null;
  ok('list.pendingTagAuthor', !!ptag && /未批核 · #34 .+ 提議/.test(ptag.textContent || ''),
    ptag ? ptag.textContent : 'n/a');
  ok('list.authorNotDuplicated', !!prow && !/by /.test(prow.textContent || ''),
    prow ? (prow.querySelector('.pb-meta') || {}).textContent : 'no row');

  /* ── 4. US-142：教練進站＝瀏覽（與球員 100% 相同的畫面）＋ 🔔 待批審核中心 ── */
  enterCoachMode(true);
  await sleep(500);
  syncEditUI();
  ok('coach.mode', isCoach() === true);
  ok('coach.startsBrowsing', state.editing === false, String(state.editing));
  ok('coach.canEditFalse', canEdit() === false);
  ok('coach.browseKeys', document.body.dataset.keys === 'play', document.body.dataset.keys);
  ok('coach.playKeysShown', vis($id('playKeys')));
  ok('coach.editKeysHidden', getComputedStyle($id('editKeys')).display === 'none');
  ok('coach.panelHidden', getComputedStyle($id('toolPanel')).display === 'none');
  ok('coach.sidebarHidden', getComputedStyle($id('sidebar')).display === 'none');
  ok('coach.addStripHidden', getComputedStyle(document.querySelector('.step-add')).display === 'none');

  /* 需求 1：教練瀏覽 vs 球員瀏覽 —— 逐項比對同一組外框（display + 播放鍵尺寸） */
  const browseParts = ['playKeys', 'editKeys', 'toolPanel', 'sidebar'];
  const browseSig = function () {
    const parts = browseParts.map(function (k) {
      const el = $id(k);
      return k + ':' + (el ? getComputedStyle(el).display : 'x');
    });
    parts.push('strip:' + getComputedStyle(document.querySelector('.step-add')).display);
    const pk = $id('playKeys').getBoundingClientRect();
    parts.push('pkbox:' + Math.round(pk.width) + 'x' + Math.round(pk.height));
    return parts.join('|');
  };
  const sigCoach = browseSig();
  const badgeCoachVisible = $id('btnPending').hidden === false;
  state.mode = 'player';
  applyMode();
  const sigPlayer = browseSig();
  ok('parity.playerBadgeHidden', $id('btnPending').hidden === true);
  ok('parity.playerReviewBarHidden', $id('reviewBar').hidden === true);
  state.mode = 'coach';
  applyMode();
  syncEditUI();
  ok('parity.coachVsPlayer', sigCoach === sigPlayer, sigCoach + ' ≠ ' + sigPlayer);
  ok('coach.badgeVisible', badgeCoachVisible && $id('btnPending').hidden === false);

  /* 需求 2：教練登入時若目前載入的是待批提案 → 右下浮條直接出現 */
  ok('coach.reviewBarOnPending', $id('reviewBar').hidden === false,
    state.tacticStatus + '/' + $id('reviewBar').hidden);

  /* US-138：教練模式 → 作者自動預設「🏀 教練」 */
  openCreateDialog();
  await sleep(200);
  ok('create.authorDefaultCoach', $id('createPerson').value === 'coach', $id('createPerson').value);
  closeModal('createModal');
  await sleep(150);

  /* ── 4b. US-142：🔔 待批 (N) 徽章 ＋ 待審核 Bottom Sheet ＋ 右下批核浮條 ── */
  const pendAll = (state.playbookItems || []).filter(function (i) { return i.status === 'pending'; });
  ok('pending.onePending', pendAll.length >= 1, 'n=' + pendAll.length);
  ok('pending.badgeShown', vis($id('btnPending')), $id('btnPending').hidden + '');
  ok('pending.countMatches', ($id('pendBadge').textContent || '') === String(pendAll.length),
    $id('pendBadge').textContent + ' vs ' + pendAll.length);

  $id('btnPending').click();
  await sleep(340);
  ok('pending.sheetOpens', $id('pendingSheet').hidden === false &&
    $id('pendingSheet').classList.contains('is-open'));
  ok('pending.sheetScrim', $id('pbScrim').hidden === false &&
    $id('btnPending').getAttribute('aria-expanded') === 'true');
  const pendRows = $id('pendList').querySelectorAll('.pend-item');
  ok('pending.itemRows', pendRows.length === pendAll.length, pendRows.length + ' rows');
  const firstPend = pendRows[0];
  ok('pending.itemName', !!firstPend &&
    (firstPend.querySelector('.pend-item-name b').textContent || '').length > 0,
    firstPend ? firstPend.querySelector('.pend-item-name b').textContent : 'n/a');
  ok('pending.itemMeta', !!firstPend && /提議：/.test(firstPend.textContent) && /提交：/.test(firstPend.textContent),
    firstPend ? (firstPend.textContent || '').replace(/\s+/g, ' ').slice(0, 60) : 'n/a');
  ok('pending.itemTag', !!firstPend && /未批核/.test(firstPend.textContent));

  firstPend.click();
  await sleep(1800);
  ok('pending.sheetClosedAfterLoad', $id('pendingSheet').hidden === true);
  ok('pending.loadOnClick', state.tacticId === firstPend.dataset.id && state.tacticStatus === 'pending',
    state.tacticId + '/' + state.tacticStatus);
  ok('pending.reviewBarShown', $id('reviewBar').hidden === false);
  ok('pending.reviewBtns', vis($id('rvApprove')) && vis($id('rvEdit')) && vis($id('rvReject')));
  ok('pending.reviewMeta', ($id('rvMeta').textContent || '').indexOf('提議：') >= 0, $id('rvMeta').textContent);

  /* 載入後會自動播一次 → 先停止播放（播放中批核鍵是禁用的） */
  await stopPlayback();
  await sleep(500);
  syncEditUI();
  ok('pending.reviewBtnsEnabled', $id('rvApprove').disabled === false, String($id('rvApprove').disabled));

  const pendBefore = pendAll.length;
  $id('rvApprove').click();
  await sleep(1800);
  ok('pending.approved', state.tacticStatus === 'approved', String(state.tacticStatus));
  ok('pending.reviewBarHiddenAfter', $id('reviewBar').hidden === true);
  const pendLeft = (state.playbookItems || []).filter(function (i) { return i.status === 'pending'; }).length;
  ok('pending.badgeDecrement', pendLeft === pendBefore - 1, pendLeft + ' ← ' + pendBefore);

  /* ── 5. 球員看既有戰術：唯讀瀏覽（US-137 起手冊不再有「✏️ 修改提案」入口） ── */
  exitCoachMode();
  await sleep(300);
  const items = await store.list();
  const own = items.filter(function (i) { return i.name === 'SMOKE 新戰術'; })[0];
  ok('list.hasRecord', !!own, 'total=' + items.length);
  if (own) { await loadTactic(own); await sleep(900); }
  ok('load.readonlyAfterLoad', state.editing === false, String(state.editing));
  ok('load.tacticIdSet', !!state.tacticId, String(state.tacticId));
  ok('readonly.noProposeEntry', typeof startProposalEdit === 'undefined');
  ok('readonly.metaDefenseKept', state.tacticDefense === '212', String(state.tacticDefense));
  /* US-139：唯讀 → 播放 4 鍵回歸、編輯 4 鍵與面板退場 */
  ok('readonly.playKeysBack', document.body.dataset.keys === 'play', document.body.dataset.keys);
  ok('readonly.editKeysHidden', getComputedStyle($id('editKeys')).display === 'none');
  ok('readonly.panelHidden', getComputedStyle($id('toolPanel')).display === 'none');
  /* US-138：底部 4 鍵永久固定 → 分享鍵在任何狀態都不會被儲存鍵取代 */
  ok('readonly.shareKept', $id('btnShare').hidden === false);
  if (mobile) ok('readonly.shareBack', vis($id('btnShare')));
  await stopPlayback();
  await sleep(400);

  /* ── 5b. US-139：「＋ 新增」→「✕ 退出」→ 原樣回到剛剛的播放畫面 ── */
  const framesBefore = state.frames.length;
  const idBeforeExit = state.tacticId;
  const nameBeforeExit = state.tacticName;
  const step1Before = state.frames[0] ? state.frames[0].name : '';
  $id('btnNewTactic').click();
  await sleep(400);
  ok('exit.createOpened', $id('createModal').hidden === false);
  $id('createName').value = 'SMOKE 退出測試';
  $id('createForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  await sleep(900);
  ok('exit.inEdit', state.editing === true && state.tacticName === 'SMOKE 退出測試',
    state.editing + '/' + state.tacticName);
  ok('exit.labelWhileEditing', ($id('btnNewTactic').textContent || '').indexOf('退出') >= 0);
  await exitEditMode();
  await sleep(700);
  ok('exit.restoresPlay', state.editing === false && document.body.dataset.keys === 'play',
    state.editing + '/' + document.body.dataset.keys);
  ok('exit.restoresFrames', state.frames.length === framesBefore,
    state.frames.length + ' vs ' + framesBefore);
  ok('exit.restoresFramesContent', String(state.frames[0] && state.frames[0].name) === String(step1Before));
  ok('exit.restoresId', state.tacticId === idBeforeExit, String(state.tacticId));
  ok('exit.restoresName', state.tacticName === nameBeforeExit, String(state.tacticName));
  ok('exit.labelBack', ($id('btnNewTactic').textContent || '').indexOf('新增') >= 0,
    ($id('btnNewTactic').textContent || '').trim());
  ok('exit.playKeysVisible', vis($id('btnPlay')) && !vis($id('ekSave')));

  /* ── 6. 步驟密集模式 & GIF 助手存在 ── */
  /* -- 7. 儲存身分切換：球員用教練暗號發布（錯 --> 對） -- */
  exitCoachMode();
  await sleep(400);
  openSaveDialog();
  await sleep(500);
  /* US-138：儲存對話框的作者下拉同樣是「🏀 教練置頂 + 18 位球員」，並自動帶入作者 */
  ok('save.personOptions', $id('savePerson').options.length === 19,
    $id('savePerson').options.length + ' opts');
  ok('save.authorPreselected', $id('savePerson').value === '34', $id('savePerson').value);
  setSaveRole('coach');
  await sleep(150);
  ok('coachSave.roleCoach', state.saveRole === 'coach', state.saveRole);
  ok('coachSave.okLabel', $id('saveOk').textContent === '發布', $id('saveOk').textContent);
  ok('coachSave.codeShown', $id('saveCoachWrap').hidden === false);
  ok('coachSave.playerHidden', $id('savePlayerWrap').hidden === true);
  $id('saveName').value = 'SMOKE 教練發布';
  $id('saveCode').value = '0000';
  $id('saveForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  await sleep(600);
  ok('coachSave.wrongCodeStays',
    $id('saveModal').hidden === false && ($id('saveError').textContent || '').length > 0,
    $id('saveError').textContent || 'empty');
  $id('saveCode').value = '1234';
  $id('saveForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  await sleep(1800);
  ok('coachSave.approved', state.tacticStatus === 'approved', String(state.tacticStatus));
  ok('coachSave.modalClosed', $id('saveModal').hidden === true);
  ok('coachSave.autoCoach', isCoach() === true);

  /* -- 7b. US-138：作者＝🏀 教練 → 📢 發布（直接寫入已批核、不跳儲存對話框、不跳清畫布確認） -- */
  openCreateDialog();
  await sleep(250);
  ok('author.coachDefaultInCreate', $id('createPerson').value === 'coach', $id('createPerson').value);
  $id('createName').value = 'SMOKE 教練自建';
  $id('createPerson').value = 'coach';
  $id('createForm').dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  await sleep(1800);
  ok('author.coachNoConfirm', $id('confirmModal').hidden === true);
  ok('author.coachEditing', state.editing === true, String(state.editing));
  ok('author.coachIsAuthor', isCoachAuthor() === true);
  ok('author.publishLabel', ($id('ekSave').textContent || '').indexOf('發布') >= 0,
    ($id('ekSave').textContent || '').trim());
  $id('ekSave').click();
  await sleep(1800);
  ok('author.coachNoDialog', $id('saveModal').hidden === true);
  ok('author.coachApproved', state.tacticStatus === 'approved', String(state.tacticStatus));
  const coachRec = (await store.list()).filter(function (i) {
    return i.name === 'SMOKE 教練自建';
  })[0];
  ok('author.coachRecordApproved', !!coachRec && coachRec.status === 'approved',
    coachRec ? String(coachRec.status) : 'missing record');

  /* -- 8. 「修改後批核」：改完按儲存 --> 原地變已批核（不新增紀錄） -- */
  const mine = (await store.list()).filter(function (i) { return i.name === 'SMOKE 教練發布'; })[0];
  ok('approveEdit.saved', !!mine);
  if (mine) {
    await store.setStatus(mine.id, mine.source, 'pending');
    await loadTactic(mine);
    await sleep(900);
    await stopPlayback();
    await sleep(300);
    syncEditUI();
    ok('approveEdit.statusPending', state.tacticStatus === 'pending', String(state.tacticStatus));
    ok('approveEdit.reviewBarShown', $id('reviewBar').hidden === false);
    ok('approveEdit.btnVisible', vis($id('rvEdit')));
    const beforeId = state.tacticId;
    $id('rvEdit').click();
    await sleep(400);
    ok('approveEdit.on', state.approveOnSave === true && state.editing === true,
      state.approveOnSave + '/' + state.editing);
    ok('approveEdit.exitLabel', ($id('btnNewTactic').textContent || '').indexOf('退出') >= 0);
    $id('ekSave').click();            /* US-138：直接發布，不再經過儲存對話框 */
    await sleep(1800);
    ok('approveEdit.noDialog', $id('saveModal').hidden === true);
    ok('approveEdit.approved', state.tacticStatus === 'approved', String(state.tacticStatus));
    ok('approveEdit.sameId', state.tacticId === beforeId, String(state.tacticId));
    ok('approveEdit.cleared', state.approveOnSave === false);
    const dup = (await store.list()).filter(function (i) { return i.name === 'SMOKE 教練發布'; });
    ok('approveEdit.noDuplicate', dup.length === 1, 'n=' + dup.length);
  }

  syncStepbarDense();
  ok('dense.noThrow', true, $id('stepList').className);
  ok('gif.helpers', typeof captureGif === 'function' && typeof shareTactic === 'function' &&
    typeof gifshotReady === 'function');

  /* ── 10. US-141：走位畫筆 → 步驟 keyframe 聯動 ＋ 播放期箭咀＝運動路徑 ── */
  enterCoachMode(true);
  await sleep(300);
  /* US-142：教練進去＝瀏覽 → 一定要先走「＋ 新增」的正式入口才進得了編輯器 */
  ok('pen.coachBrowseFirst', state.editing === false && canEdit() === false,
    state.editing + '/' + canEdit());
  await startDrawingFlow('SMOKE 走位畫筆', '34');
  await sleep(700);
  ok('pen.enteredEditor', state.editing === true && canEdit() === true,
    state.editing + '/' + canEdit());
  await stopPlayback();
  await sleep(200);

  const penKeep = {
    frames: state.frames,
    current: state.currentFrame,
    tool: state.tool,
    panel: state.toolPanel
  };

  /* 乾淨的單一步驟：以目前畫布當步驟 1 */
  state.frames = [{ id: 'pen-step-1', name: '步驟 1', objects: cloneObjects(serializeCanvas()) }];
  await renderFrame(0);
  await sleep(200);

  const penOff1 = findNode('off1');
  const penStart = penOff1 ? { x: penOff1.left, y: penOff1.top } : { x: 500, y: 700 };
  ok('pen.fixtures', !!penOff1 && !!findNode('off2') && !!findNode('ball'),
    penOff1 ? Math.round(penStart.x) + ',' + Math.round(penStart.y) : 'no off1');

  /* ＋ 加步驟：畫筆要自動放下，新步驟才能直接拖曳 */
  setTool('cut');
  await sleep(120);
  addStep();
  await sleep(450);
  ok('pen.step2ToolSelect', state.tool === 'select', state.tool);
  ok('pen.step2Count', state.frames.length === 2, String(state.frames.length));

  /* ① 跑位線：從 1 號身上起筆 → 直接跑到箭咀終點（並寫回步驟） */
  const penAutoBefore = canvas.getObjects().filter(function (o) { return o.kind === 'line' && o.autoLine; }).length;
  const penTarget = clampPoint({ x: penStart.x + 150, y: penStart.y + 40 });
  const penCut = commitStrokeToStep('cut', penStart, penTarget);
  await sleep(120);
  const penOff1b = findNode('off1');
  ok('pen.cutHandled', penCut === true, String(penCut));
  ok('pen.cutMovedNode', !!penOff1b &&
    Math.abs(penOff1b.left - penTarget.x) < 1.5 && Math.abs(penOff1b.top - penTarget.y) < 1.5,
    penOff1b ? Math.round(penOff1b.left) + ',' + Math.round(penOff1b.top) : 'missing');
  const penSavedOff1 = (state.frames[1].objects || []).filter(function (o) { return o.nodeId === 'off1'; })[0];
  ok('pen.cutKeyframeSaved', !!penSavedOff1 && Math.abs(penSavedOff1.left - penTarget.x) < 1.5,
    penSavedOff1 ? String(Math.round(penSavedOff1.left)) : 'missing');
  const penAutoAfter = canvas.getObjects().filter(function (o) { return o.kind === 'line' && o.autoLine; }).length;
  ok('pen.cutAutoLine', penAutoAfter === penAutoBefore + 1, penAutoBefore + '→' + penAutoAfter);

  /* ② 傳球虛線：拖到 2 號身上 → 球換手、寫回步驟 */
  const penOff2 = findNode('off2') || { nodeId: 'off2', left: 500, top: 500 };
  const penPass = commitStrokeToStep('pass',
    { x: penOff1b.left, y: penOff1b.top },
    penOff2 ? { x: penOff2.left, y: penOff2.top } : { x: 0, y: 0 });
  await sleep(120);
  const penHandler = getBallHandler();
  const penBallNow = findNode('ball');
  ok('pen.passHandled', penPass === true, String(penPass));
  ok('pen.passHandlerChanged', !!penHandler && penHandler.nodeId === 'off2',
    penHandler ? penHandler.nodeId : 'none');
  const penSavedBall = (state.frames[1].objects || []).filter(function (o) { return o.kind === 'ball'; })[0];
  ok('pen.passKeyframeSaved', !!penSavedBall && !!penBallNow &&
    Math.abs(penSavedBall.left - penBallNow.left) < 1.5,
    penSavedBall && penBallNow ? Math.round(penSavedBall.left) + ' vs ' + Math.round(penBallNow.left) : 'missing');

  /* ③ 掩護線：只是標記，不動任何站位；④ 沒對到節點 → 交回純線條（不誤移球員） */
  const penLeftBefore = penOff2.left;
  ok('pen.screenNoMove', commitStrokeToStep('screen',
    { x: penOff2.left, y: penOff2.top },
    { x: penOff2.left + 90, y: penOff2.top - 60 }) === false &&
    Math.abs((findNode('off2') || {}).left - penLeftBefore) < 0.01, 'left=' + penLeftBefore);
  /* 找一個離所有節點都 ≥130px 的空點：起筆沒對到人 → 不該被接手 */
  const penFar = (function () {
    const nodes = canvas.getObjects().filter(function (o) { return o.nodeId && o.kind !== 'line'; });
    for (let y = 60; y <= 900; y += 40) {
      for (let x = 60; x <= 940; x += 40) {
        const clear = nodes.every(function (n) {
          return Math.hypot(n.left - x, n.top - y) > 130;
        });
        if (clear) return { x: x, y: y };
      }
    }
    return null;
  })();
  ok('pen.noSourceNotHandled', !!penFar && commitStrokeToStep('cut',
    penFar, { x: penFar.x + 80, y: penFar.y - 40 }) === false,
    penFar ? penFar.x + ',' + penFar.y : 'no clear point');

  /* ⑤ 播放：補間期間把「目標步驟的箭咀」鋪成運動路徑，播完收乾淨 */
  await renderFrame(0);
  await sleep(200);
  const penTween = tweenToFrame(0, 1);
  await sleep(320);
  const penPreviewMid = canvas.getObjects().filter(function (o) {
    return o.isPreview && o.kind === 'line';
  }).length;
  ok('play.previewLinesShown', penPreviewMid >= 1, penPreviewMid + ' preview');
  await penTween;
  await sleep(150);
  const penPreviewAfter = canvas.getObjects().filter(function (o) { return o.isPreview; }).length;
  ok('play.previewCleared', penPreviewAfter === 0, penPreviewAfter + ' left');

  /* 還原現場（後面的 spec 依賴原本的戰術與狀態） */
  state.frames = penKeep.frames;
  state.tool = penKeep.tool;
  if (penKeep.panel) { state.toolPanel = penKeep.panel; syncToolPanel(); }
  setTool('select');
  await renderFrame(penKeep.current || 0);
  await sleep(200);

  /* ── 9. US-137：左上隊徽／隊名＝回首頁（手冊的 ⎋ 切換身分已移除） ── */
  const brandBtn = $id('brandHome');
  ok('home.brandIsButton', !!brandBtn && brandBtn.tagName === 'BUTTON',
    brandBtn ? brandBtn.tagName : 'missing');
  ok('home.notNestedInButton', !!brandBtn && !!document.querySelector('.topbar') &&
    document.querySelectorAll('.topbar button.brand').length === 1);
  const splashBefore = $id('splash') ? !$id('splash').hidden : false;
  if (brandBtn) brandBtn.click();
  await sleep(500);
  ok('home.splashOpened', $id('splash') && !$id('splash').hidden,
    'before=' + splashBefore + ' now=' + ($id('splash') ? !$id('splash').hidden : 'n/a'));
  ok('home.splashedBodyMode', document.body.dataset.mode !== 'coach' ||
    !$id('splash').hidden);
  /* 回球員模式收拾善後，避免影響後續 spec */
  $id('enterPlayer').click();
  await sleep(400);
  ok('home.backToPlayer', document.body.dataset.mode === 'player', document.body.dataset.mode);

  /* ── 11. US-143：PWA（manifest／iOS 主畫面 meta／安裝引導／一次性清除遷移） ── */
  const manifestLink = document.querySelector('link[rel="manifest"]');
  ok('pwa.manifestLinked',
    !!manifestLink && /(^|\/)manifest\.json$/.test(manifestLink.getAttribute('href') || ''),
    manifestLink ? manifestLink.getAttribute('href') : 'missing');
  ok('pwa.appleTouchIcon', !!document.querySelector('link[rel="apple-touch-icon"]'));
  const metaCapable = document.querySelector('meta[name="apple-mobile-web-app-capable"]');
  const metaStatus = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  const metaTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  ok('pwa.metaTags',
    !!metaCapable && metaCapable.content === 'yes' &&
    !!metaStatus && metaStatus.content === 'black-translucent' &&
    !!metaTitle && metaTitle.content === 'MondayBeer' &&
    !!metaTheme && metaTheme.content === '#EA580C',
    [metaCapable && metaCapable.content, metaStatus && metaStatus.content,
      metaTitle && metaTitle.content, metaTheme && metaTheme.content].join('/'));

  const tip = $id('pwaTip');
  ok('pwa.tipElement', !!tip && !!$id('pwaTipClose'));
  /* headless 是桌機 Chrome → 不是 iOS，開機不該自動彈出 */
  ok('pwa.tipIdleOnDesktop', !!tip && tip.hidden === true &&
    !document.body.classList.contains('has-pwa-tip'));

  /* 手動模擬「iOS 未加入主畫面」→ 彈窗出現，且（手機）貼在底部控制卡上方不重疊
     等 700ms：進場是 translateY(14px)→0 的 300ms 動畫，太早量會量到動畫中的位置 */
  showPwaTip();
  await sleep(700);
  const tipRect = tip.getBoundingClientRect();
  const barEl = document.querySelector('.stepbar');
  const barRect = barEl ? barEl.getBoundingClientRect() : null;
  ok('pwa.tipShown', !tip.hidden && tip.classList.contains('is-open'));
  ok('pwa.tipInsideViewport',
    tipRect.left >= 0 && tipRect.right <= window.innerWidth + 1,
    Math.round(tipRect.left) + '..' + Math.round(tipRect.right) + ' vw=' + window.innerWidth);
  if (window.innerWidth < 768) {
    ok('pwa.tipAboveStepbar', !!barRect && tipRect.bottom <= barRect.top + 1,
      'tipBottom=' + Math.round(tipRect.bottom) + ' barTop=' + (barRect ? Math.round(barRect.top) : 'n/a'));
  } else {
    ok('pwa.tipAboveStepbar', tipRect.right <= window.innerWidth - 8,
      'tipRight=' + Math.round(tipRect.right) + ' vw=' + window.innerWidth);
  }

  /* ✕ → 收起並記住 7 天（時戳必須在未來） */
  $id('pwaTipClose').click();
  await sleep(400);
  const mutedUntil = parseInt(window.localStorage.getItem('mbab:pwa-tip-dismissed-until') || '0', 10) || 0;
  ok('pwa.dismissPersists', mutedUntil > Date.now() + 6 * 24 * 3600 * 1000, String(mutedUntil));
  ok('pwa.tipHiddenAfterDismiss', tip.hidden === true &&
    !document.body.classList.contains('has-pwa-tip'));

  /* 一次性清除遷移：塞 2 筆假戰術（含 TESTING）→ 清 flag → 執行 → 索引歸零、紀錄刪除、flag 蓋上 */
  const staleBefore = (function () {
    let n = 0;
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = window.localStorage.key(i);
      if (key && key.indexOf('mbab:tactic:') === 0) n += 1;
    }
    return n;
  })();
  try {
    window.localStorage.setItem('mbab:tactic:smoke-a', '{}');
    window.localStorage.setItem('mbab:tactic:smoke-b', '{}');
    window.localStorage.setItem('mbab:tactics:index',
      JSON.stringify([{ id: 'smoke-a', name: '新戰術 1' }, { id: 'smoke-b', name: 'TESTING' }]));
    window.localStorage.removeItem('mbab:migrate:purge-test-tactics:2026-11');
  } catch (err) { /* noop */ }
  const purged = purgeTestTacticsOnce();
  const indexAfter = window.localStorage.getItem('mbab:tactics:index');
  const leftA = window.localStorage.getItem('mbab:tactic:smoke-a');
  const leftB = window.localStorage.getItem('mbab:tactic:smoke-b');
  let staleAfter = 0;
  for (let i = 0; i < window.localStorage.length; i += 1) {
    const key = window.localStorage.key(i);
    if (key && key.indexOf('mbab:tactic:') === 0) staleAfter += 1;
  }
  ok('pwa.purgeRemoved', purged >= 2 && purged >= staleBefore,
    'purged=' + purged + ' staleBefore=' + staleBefore);
  ok('pwa.purgeNoTacticKeys', staleAfter === 0, staleAfter + ' left');
  ok('pwa.purgeIndexCleared', indexAfter === '[]', String(indexAfter));
  ok('pwa.purgeRecordsGone', leftA === null && leftB === null);
  ok('pwa.purgeFlagSet', !!window.localStorage.getItem('mbab:migrate:purge-test-tactics:2026-11'));
  ok('pwa.purgeIdempotent', purgeTestTacticsOnce() === 0);

  report();
})().catch(function (e) {
  const pre = document.createElement('pre');
  pre.id = 'SMOKE';
  pre.textContent = 'SMOKE_BEGIN\nHARNESS_ERROR ' + ((e && e.stack) || e) + '\nSMOKE_END';
  document.body.appendChild(pre);
});
