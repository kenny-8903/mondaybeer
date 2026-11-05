/* 自動測試：載入 index.html 後在 headless Chrome 中執行，結果寫進 #testout */
(function () {
  const log = [];
  function ok(name, cond, extra) {
    log.push((cond ? 'PASS ' : 'FAIL ') + name + (extra !== undefined ? ' :: ' + extra : ''));
  }
  function flush() {
    const pre = document.createElement('pre');
    pre.id = 'testout';
    pre.textContent = log.join('\n');
    document.body.appendChild(pre);
  }

  window.addEventListener('load', function () {
    setTimeout(run, 1200);
  });

  const wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  async function run() {
    try {
      ok('fabric 已載入', typeof fabric !== 'undefined');

      /* ── 開場歡迎畫面：身分選擇 + 教練密碼閘 ── */
      const splashEl = $('#splash');
      ok('開場首頁預設顯示', !!splashEl && !splashEl.hidden);
      ok('首頁圖層高於抽屜、低於彈窗',
        Number(getComputedStyle(splashEl).zIndex) === 76, getComputedStyle(splashEl).zIndex);
      ok('首頁有球員／教練兩個身分鈕', !!$('#enterPlayer') && !!$('#enterCoach'));
      $('#enterPlayer').click();
      await wait(140);
      ok('選「我是球員」後首頁關閉', splashEl.hidden === true);
      ok('球員進入後為球員模式（唯讀）', state.mode === 'player', state.mode);
      ok('頂部有「切換身分」鈕', !!$('#btnHome'));
      $('#btnHome').click();
      await wait(140);
      ok('按 ⎋ 切換身分回到首頁', splashEl.hidden === false);
      $('#enterCoach').click();
      await wait(100);
      ok('教練身分先要密碼', $('#pwModal').hidden === false);
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      await wait(120);
      ok('首頁開啟時 Esc 可關閉密碼框、首頁仍在',
        $('#pwModal').hidden === true && splashEl.hidden === false);
      $('#enterCoach').click();
      await wait(100);
      $('#pwInput').value = COACH_PASSWORD;
      submitPassword();
      await wait(200);
      ok('密碼正確即進入教練模式並關首頁',
        state.mode === 'coach' && splashEl.hidden === true, state.mode + '/' + splashEl.hidden);
      await stopPlayback();

      ok('戰術庫 7 套', TACTIC_LIBRARY.length === 7, TACTIC_LIBRARY.length);
      ok('三大分類', LIB_CATEGORIES.length === 3, LIB_CATEGORIES.map(function (c) { return c.key; }).join(','));
      const perCat = LIB_CATEGORIES.map(function (c) {
        return c.key + ':' + TACTIC_LIBRARY.filter(function (t) { return t.cat === c.key; }).length;
      }).join(',');
      ok('分類數量 2/2/3', perCat === 'beat212:2,beat32:2,blob:3', perCat);
      ok('分類標籤為破 2-1-2／破 3-2／底線開球',
        LIB_CATEGORIES.map(function (c) { return c.key + '/' + c.label; }).join(',') ===
        'beat212/破 2-1-2 聯防,beat32/破 3-2 聯防,blob/底線開球',
        LIB_CATEGORIES.map(function (c) { return c.key + '/' + c.label; }).join(','));
      const blobKeys = TACTIC_LIBRARY.filter(function (t) { return /^blob-/.test(t.key); })
        .map(function (t) { return t.key; }).join(',');
      ok('底線開球 3 套', blobKeys === 'blob-stack,blob-box,blob-elevator', blobKeys);
      const beatKeys = TACTIC_LIBRARY.filter(function (t) { return /^beat(212|32)-/.test(t.key); })
        .map(function (t) { return t.key; }).join(',');
      ok('破聯防 4 套（2-1-2 ×2・3-2 ×2）',
        beatKeys === 'beat212-elbow,beat212-highlow,beat32-skip,beat32-shortcorner', beatKeys);
      ok('防守標籤為 PG/SG/SF/PF/C',
        [NODE_LABELS.def1, NODE_LABELS.def2, NODE_LABELS.def3, NODE_LABELS.def4, NODE_LABELS.def5].join('/') === 'PG/SG/SF/PF/C',
        [NODE_LABELS.def1, NODE_LABELS.def2, NODE_LABELS.def3, NODE_LABELS.def4, NODE_LABELS.def5].join('/'));
      const libJson = JSON.stringify(TACTIC_LIBRARY);
      ok('戰術庫不再出現 X1–X5', libJson.indexOf('X1') === -1 && libJson.indexOf('X5') === -1);

      let minObjs = 999;
      let stepsOk = true;
      let cueOk = true;
      TACTIC_LIBRARY.forEach(function (t) {
        const frames = materialiseTactic(t);
        if (frames.length !== 4) stepsOk = false;
        frames.forEach(function (f) {
          minObjs = Math.min(minObjs, f.objects.length);
          if (!f.cue) cueOk = false;
        });
      });
      ok('每套 4 個步驟', stepsOk);
      ok('每格至少 11 物件', minObjs >= 11, 'min=' + minObjs);
      ok('每步都有 cue 標籤', cueOk);

      const firstFrame = materialiseTactic(TACTIC_LIBRARY[0])[0];
      const offCount = firstFrame.objects.filter(function (o) { return o.kind === 'offense'; }).length;
      const defCount = firstFrame.objects.filter(function (o) { return o.kind === 'defense'; }).length;
      const ballCount = firstFrame.objects.filter(function (o) { return o.kind === 'ball'; }).length;
      ok('5 攻 5 守 1 球', offCount === 5 && defCount === 5 && ballCount === 1,
        offCount + '/' + defCount + '/' + ballCount);
      const nos = firstFrame.objects.filter(function (o) { return o.kind === 'offense'; })
        .map(function (o) { return o.rosterNo; });
      ok('進攻員帶著名單背號', nos.join(',') === '1,5,34,0,31', nos.join(','));

      const defNode = createPlayer('def1', true, null);
      const defText = defNode.getObjects().filter(function (o) { return typeof o.text === 'string'; })
        .map(function (o) { return o.text; }).join(',');
      ok('防守員圓內文字為 PG', defText === 'PG', defText);
      ok('防守員不再畫 ✕ 記號', defNode.getObjects().length === 2, defNode.getObjects().length);
      const defPanel = $$('.node[data-tool^="def"]').map(function (b) { return b.textContent.trim(); }).join('/');
      ok('防守面板按鈕為 PG/SG/SF/PF/C', defPanel === 'PG/SG/SF/PF/C', defPanel);

      state.mode = 'coach';
      applyMode();

      /* ── 右側面板精簡：進攻 1–5 由名單取代 ── */
      ok('進攻節點按鈕已移除', $$('.node[data-tool^="off"]').length === 0,
        $$('.node[data-tool^="off"]').length);
      ok('防守與球共 6 顆', $$('.node[data-tool]').length === 6, $$('.node[data-tool]').length);
      ok('名單 18 顆按鈕', $$('#rosterGrid .roster-btn').length === 18,
        $$('#rosterGrid .roster-btn').length);

      /* ── 即點即播：載入後自動播放 + 預設循環 ── */
      await loadLibraryTactic('beat212-elbow');
      ok('點戰術即自動播放', state.playing === true);
      ok('自動播放預設循環', state.loop === true);
      ok('循環鈕亮起', $('#btnLoop').classList.contains('is-active'));
      ok('播放鈕變停止播放', $('#btnPlay').textContent.indexOf('停止播放') >= 0,
        $('#btnPlay').textContent.trim());
      await stopPlayback();
      ok('按停止可停下', state.playing === false);

      ok('載入後 4 步', state.frames.length === 4, state.frames.length);
      ok('tacticId = lib:beat212-elbow', state.tacticId === 'lib:beat212-elbow', state.tacticId);
      ok('畫布 11 物件', serializeCanvas().length === 11, serializeCanvas().length);
      ok('cue 標籤已顯示', !$('#cueTag').hidden && $('#cueTag').textContent === '肘區空檔',
        $('#cueTag').textContent);
      ok('手冊縮圖 4 個', $$('#stepThumbs .dock-thumb').length === 4);
      ok('解說卡 4 張', $$('#stepCards .dock-card').length === 4);
      ok('手冊分類已渲染', $$('.pb-cat-list .pb-lib').length === 7, $$('.pb-cat-list .pb-lib').length);
      ok('手冊總數標示 7 套', $('#pbLibCount').textContent === '7 套', $('#pbLibCount').textContent);
      ok('手冊分類為 3 個', $$('#pbScroll .pb-cat').length === 3, $$('#pbScroll .pb-cat').length);
      ok('分類 data-cat 對應新 key',
        $$('#pbScroll .pb-cat-list').map(function (el) { return el.dataset.cat; }).join(',') ===
        'beat212,beat32,blob',
        $$('#pbScroll .pb-cat-list').map(function (el) { return el.dataset.cat; }).join(','));

      /* ── 播放中換另一套：舊動畫先停、新戰術接手自動播放 ── */
      playAnimation();
      await wait(220);
      ok('（前置）目前正在播放', state.playing === true);
      await loadLibraryTactic('beat32-skip');
      ok('換套後 tacticId 更新', state.tacticId === 'lib:beat32-skip', state.tacticId);
      ok('換套後仍在自動播放', state.playing === true);
      ok('換套後 4 步', state.frames.length === 4, state.frames.length);
      await stopPlayback();
      ok('換套後可按停止停下', state.playing === false);

      await renderFrame(0);
      const handler = getBallHandler();
      ok('偵測到持球者', !!handler, handler ? handler.nodeId : 'none');
      updateGlow();
      ok('持球光暈已套用', !!(handler && handler.shadow && handler.shadow.blur >= 9 && handler.shadow.blur <= 15),
        handler && handler.shadow ? handler.shadow.blur : 'none');
      const saved = serializeCanvas();
      ok('序列化不含光暈陰影', saved.every(function (o) { return !o.shadow; }));

      const tween = tweenToFrame(0, 1);
      await new Promise(function (r) { setTimeout(r, 240); });
      const trailCount = canvas.getObjects().filter(function (o) { return o.isTrail; }).length;
      ok('殘影軌跡已生成', trailCount > 0, trailCount);
      ok('序列化不含殘影', serializeCanvas().every(function (o) { return !o.isTrail; }));
      await tween;
      await new Promise(function (r) { setTimeout(r, 700); });
      ok('殘影已自動清除', canvas.getObjects().filter(function (o) { return o.isTrail; }).length === 0);

      /* ── 防守補間：依球的位置推導防守站位 ── */
      const offProbe = { 1: [500, 660], 2: [200, 400], 3: [800, 400], 4: [350, 387], 5: [650, 387] };
      const defA = deriveDefense('zone212', offProbe, [500, 660]);
      const defB = deriveDefense('zone212', offProbe, [905, 150]);
      const movedCount = [1, 2, 3, 4, 5].filter(function (i) {
        return Math.hypot(defA[i][0] - defB[i][0], defA[i][1] - defB[i][1]) > 6;
      }).length;
      ok('球換邊時防守會移動', movedCount >= 2, 'moved=' + movedCount);
      ok('推導防守座標都在球場內', [1, 2, 3, 4, 5].every(function (i) {
        return defA[i][0] > 0 && defA[i][0] < BASE_W && defA[i][1] > 0 && defA[i][1] < BASE_H;
      }), JSON.stringify(defA));

      let defMoving = 0;
      TACTIC_LIBRARY.forEach(function (t) {
        const fr = materialiseTactic(t);
        const spotOf = function (f) {
          return f.objects.filter(function (o) { return o.kind === 'defense'; })
            .map(function (o) { return Math.round(o.left) + ',' + Math.round(o.top); }).join('|');
        };
        if (spotOf(fr[0]) !== spotOf(fr[fr.length - 1])) defMoving++;
      });
      ok('每套戰術的防守都會輪轉', defMoving === TACTIC_LIBRARY.length,
        defMoving + '/' + TACTIC_LIBRARY.length);

      /* ── 球場已移除隊徽／地板文字水印 ── */
      const crestLeft = courtGroup.getObjects().filter(function (o) { return o.isCrest; });
      ok('球場不再有隊徽水印', crestLeft.length === 0, crestLeft.length);
      const courtTexts = courtGroup.getObjects().filter(function (o) { return typeof o.text === 'string'; })
        .map(function (o) { return o.text; }).join('|');
      ok('球場不再有地板文字水印',
        courtTexts.indexOf('MONDAY') === -1 && courtTexts.indexOf('BEER') === -1, courtTexts || '(none)');
      ok('序列化不含水印', serializeCanvas().every(function (o) { return !o.isCrest; }));
      ok('沒有殘留隊徽建構函式',
        typeof buildCrest === 'undefined' && typeof makeCrest === 'undefined' &&
        typeof refreshCourtCrest === 'undefined');
      let exportable = true;
      try { canvas.toDataURL({ format: 'png', multiplier: 0.3 }); } catch (e) { exportable = false; }
      ok('畫布未被污染（可匯出）', exportable);

      await applyDefensePreset('23');
      const d2 = findNode('def2');
      ok('防守陣型座標正確', !!d2 && Math.round(d2.left) === 330 && Math.round(d2.top) === 490,
        d2 ? Math.round(d2.left) + ',' + Math.round(d2.top) : 'none');

      /* ── 首選陣型（2-1-2）與自訂防守 ── */
      const defaultBtn = $('#defGrid .def-btn.is-default');
      ok('2-1-2 標記為首選', !!defaultBtn && defaultBtn.dataset.preset === '212',
        defaultBtn ? defaultBtn.dataset.preset : 'none');
      ok('首選徽章文字正確', !!defaultBtn && !!defaultBtn.querySelector('.def-badge') &&
        defaultBtn.querySelector('.def-badge').textContent === '首選');
      ok('有自訂防守按鈕', !!$('#btnCustomDef'));
      ok('非教練時提示文字已更新',
        ($('#defGrid').parentNode.querySelector('.panel-note') || {}).textContent.indexOf('PG/SG/SF/PF/C') >= 0,
        ($('#defGrid').parentNode.querySelector('.panel-note') || {}).textContent);

      applyDefensePreset('custom');
      ok('進入自訂防守模式', state.customDefense === true);
      ok('自訂防守鈕亮起', $('#btnCustomDef').classList.contains('is-on'));
      ok('先前的預設鈕已熄滅', !$('#defGrid .def-btn[data-preset="23"]').classList.contains('is-on'));
      ok('五位防守員齊全', DEF_IDS.every(function (id) { return !!findNode(id); }));

      const d3 = findNode('def3');
      d3.set({ left: 480, top: 300 });
      canvas.fire('object:modified', { target: d3 });
      const def3Saved = (state.frames[state.currentFrame].objects || [])
        .filter(function (o) { return o.nodeId === 'def3'; })[0];
      ok('拖曳防守員後自動寫回步驟', !!def3Saved && Math.round(def3Saved.left) === 480,
        def3Saved ? Math.round(def3Saved.left) + ',' + Math.round(def3Saved.top) : 'none');

      await applyDefensePreset('212');
      ok('套用預設陣型即離開自訂模式', state.customDefense === false && !$('#btnCustomDef').classList.contains('is-on'));
      ok('2-1-2 座標已套用', Math.round(findNode('def1').left) === 500 && Math.round(findNode('def1').top) === 340,
        Math.round(findNode('def1').left) + ',' + Math.round(findNode('def1').top));

      /* ── GIF 檔名：直接沿用戰術名稱 ── */
      await loadLibraryTactic('blob-stack');
      ok('底線開球戰術名 → GIF 檔名', tacticFileName('gif') === '直線排開Stack.gif', tacticFileName('gif'));
      ok('底線開球戰術 4 步', state.frames.length === 4, state.frames.length);
      const keepName = state.tacticName;
      state.tacticName = '破 2-1-2 聯防：雙肘區策應';
      ok('檔名去掉空白、冒號轉底線', tacticFileName('gif') === '破2-1-2聯防_雙肘區策應.gif', tacticFileName('gif'));
      state.tacticName = '';
      ok('無名戰術退回預設檔名', tacticFileName('gif') === 'MondayBeer_Tactic.gif', tacticFileName('gif'));
      state.tacticName = keepName;
      await stopPlayback();

      /* ── 名單：18 人、背號升冪、位置篩選 ── */
      ok('名單 18 人', ROSTER.length === 18, ROSTER.length);
      ok('名單每個人都帶位置',
        ROSTER.every(function (p) { return typeof p.pos === 'string' && p.pos.length >= 1; }),
        ROSTER.filter(function (p) { return !p.pos; }).length + ' 人缺位置');
      const rosterNos = $$('#rosterGrid .roster-btn').map(function (b) { return Number(b.dataset.no); });
      ok('名單按背號升冪', rosterNos.join(',') ===
        '0,1,5,6,7,8,9,10,11,12,14,21,31,34,35,50,87,99', rosterNos.join(','));
      ok('名單按鈕顯示位置（第三行）',
        $$('#rosterGrid .roster-btn').every(function (b) { return !!b.querySelector('em'); }));
      ok('位置篩選 chips 共 4 顆', $$('#posChips .pos-chip').length === 4,
        $$('#posChips .pos-chip').length);
      $('#posChips .pos-chip[data-pos="PG/SG"]').click();
      await wait(60);
      const guards = $$('#rosterGrid .roster-btn').map(function (b) { return Number(b.dataset.no); });
      ok('PG/SG 篩選只留後衛', guards.join(',') === '0,1,5,6,8,9,12', guards.join(','));
      ok('篩選中的 chip 有標記',
        $('#posChips .pos-chip[data-pos="PG/SG"]').classList.contains('is-on'));
      $('#posChips .pos-chip[data-pos="PF/C"]').click();
      await wait(60);
      const bigs = $$('#rosterGrid .roster-btn').map(function (b) { return Number(b.dataset.no); });
      ok('PF/C 篩選只留中前鋒', bigs.join(',') === '10,14,21,31,34,35,50,87,99', bigs.join(','));
      $('#posChips .pos-chip[data-pos="all"]').click();
      await wait(60);
      ok('按「全部」回復 18 人', $$('#rosterGrid .roster-btn').length === 18,
        $$('#rosterGrid .roster-btn').length);
      ok('篩選狀態記在 state.rosterFilter', state.rosterFilter === 'all', state.rosterFilter);

      /* ── 側欄順序：名單 → 防守陣型 → 路線 → 動作 → 防守與球（收合）；「快捷鍵」卡已從 DOM 移除 ── */
      const panelTitles = $$('#sidebar .panel > .panel-head h2').map(function (h) { return h.textContent; });
      ok('側欄面板順序（已無快捷鍵卡）', panelTitles.join('>') === '球員名單>防守陣型>戰術線條>動作',
        panelTitles.join('>'));
      const defBall = $('#defBallPanel');
      ok('防守與球為收合面板且預設收起',
        !!defBall && defBall.tagName === 'DETAILS' && defBall.open === false &&
        defBall.querySelector('.panel-title').textContent === '防守與球',
        defBall ? defBall.tagName + '/open=' + defBall.open : 'none');
      ok('防守與球是側欄最後一個面板', !!defBall && $('#sidebar').lastElementChild === defBall,
        $('#sidebar').lastElementChild ? $('#sidebar').lastElementChild.className : 'none');

      /* ── 回歸：存檔保留 cue / desc → 讀回 → 刪除 ── */
      const payloadFrames = state.frames.map(function (f) {
        return { name: f.name, cue: f.cue || '', desc: f.desc || '', objects: f.objects };
      });
      const savedRec = await store.save({ id: null, name: 'HARNESS-測試', frames: payloadFrames, meta: {} });
      const back = await store.load(savedRec.record.id, savedRec.source);
      ok('存檔保留 cue/desc', back.frames[0].cue === payloadFrames[0].cue && !!back.frames[0].desc && !!payloadFrames[0].cue,
        back.frames[0].cue);
      await store.remove(savedRec.record.id, savedRec.source);
      ok('刪除後清單不含測試檔', (await store.list()).every(function (it) { return it.name !== 'HARNESS-測試'; }));

      /* ── 回歸：球員模式鎖定、步驟新增／復原、播放回原步驟 ── */
      state.mode = 'player';
      applyMode();
      ok('球員模式無可選取物件',
        canvas.getObjects().filter(function (o) { return !o.isCourt && o.selectable; }).length === 0);
      ok('球員模式顯示鎖定提示', !$('#lockBadge').hidden);

      state.mode = 'coach';
      applyMode();
      const beforeSteps = state.frames.length;
      addStep();
      ok('新增步驟', state.frames.length === beforeSteps + 1, state.frames.length);
      deleteStep();
      ok('刪除步驟', state.frames.length === beforeSteps, state.frames.length);

      /* ── 回歸：播放結束回到播放前的步驟（關閉循環才跑得完） ── */
      state.loop = false;
      updateLoopBtn();
      const restoreIdx = state.currentFrame;
      await playAnimation();
      ok('播放後回到播放前的步驟', state.currentFrame === restoreIdx,
        state.currentFrame + ' vs ' + restoreIdx);

      /* ── 側欄收起 / 展開（僅 >1100px） ── */
      if (window.innerWidth > 1100) {
        const beforeW = $('.board-wrap').getBoundingClientRect().width;
        setSideCollapsed(true, true);
        await wait(120);
        const cols = getComputedStyle($('.stage')).gridTemplateColumns.split(' ');
        ok('收合後第三軌歸零', Math.round(parseFloat(cols[2])) === 0, cols.join(' | '));
        ok('收合後側欄隱藏', getComputedStyle($('#sidebar')).display === 'none',
          getComputedStyle($('#sidebar')).display);
        ok('收合後展開把手可見', getComputedStyle($('#sideExpand')).display !== 'none',
          getComputedStyle($('#sideExpand')).display);
        ok('收合狀態已記住', window.localStorage.getItem('mbab:sideCollapsed') === '1',
          window.localStorage.getItem('mbab:sideCollapsed'));
        const rect = $('.board-wrap').getBoundingClientRect();
        const holder = $('.board-restrict').getBoundingClientRect();
        const leftGap = rect.left - holder.left;
        const rightGap = holder.right - rect.right;
        ok('收合後球場變寬', rect.width > beforeW, beforeW.toFixed(1) + ' → ' + rect.width.toFixed(1));
        ok('收合後球場水平居中', Math.abs(leftGap - rightGap) <= 2,
          leftGap.toFixed(1) + '/' + rightGap.toFixed(1));
        ok('收合後球場未被裁切', rect.height <= holder.height + 1,
          rect.height.toFixed(1) + ' ≤ ' + holder.height.toFixed(1));
        setSideCollapsed(false, true);
        await wait(120);
        const colsBack = getComputedStyle($('.stage')).gridTemplateColumns.split(' ');
        ok('展開後回到三欄', Math.round(parseFloat(colsBack[2])) > 200, colsBack.join(' | '));
        ok('展開後側欄可見', getComputedStyle($('#sidebar')).display !== 'none',
          getComputedStyle($('#sidebar')).display);
      } else {
        ok('≤1100px 不顯示收合鈕', getComputedStyle($('#sideCollapse')).display === 'none',
          getComputedStyle($('#sideCollapse')).display);
        ok('≤1100px 不顯示展開把手', getComputedStyle($('#sideExpand')).display === 'none',
          getComputedStyle($('#sideExpand')).display);
      }

      /* ── 名單派上場（點 34 號） ── */
      const btn34 = $$('#rosterGrid .roster-btn').filter(function (b) { return b.dataset.no === '34'; })[0];
      ok('名單有 34 號按鈕', !!btn34);
      if (btn34) btn34.click();
      const n34 = findRosterNode(34);
      ok('點 34 號即派上場', !!n34, n34 ? Math.round(n34.left) + ',' + Math.round(n34.top) : 'none');
      ok('名單按鈕標記已上場', !!btn34 && btn34.classList.contains('is-on'));
      if (n34) { canvas.remove(n34); canvas.requestRenderAll(); }

      /* ── 持球者身上的球不蓋住背號 ── */
      const nudgeFrame = materialiseTactic(TACTIC_LIBRARY[0])[0];
      const ballObj = nudgeFrame.objects.filter(function (o) { return o.kind === 'ball'; })[0];
      const nearestOff = nudgeFrame.objects.filter(function (o) { return o.kind === 'offense'; })
        .sort(function (a, b) {
          return Math.hypot(a.left - ballObj.left, a.top - ballObj.top) -
            Math.hypot(b.left - ballObj.left, b.top - ballObj.top);
        })[0];
      const ballDist = Math.hypot(nearestOff.left - ballObj.left, nearestOff.top - ballObj.top);
      ok('球偏在持球者手側', ballDist > 12 && ballDist < GLOW_REACH, Math.round(ballDist));

      /* ── 自訂防守按鈕可見且不被裁切 ── */
      const customBtn = $('#btnCustomDef');
      const sideEl = $('#sidebar');
      ok('有自訂防守按鈕', !!customBtn && customBtn.textContent.indexOf('自訂防守') >= 0);
      if (customBtn && sideEl) {
        const bRect = customBtn.getBoundingClientRect();
        const reachable = customBtn.offsetTop + customBtn.offsetHeight <= sideEl.scrollHeight + 1;
        ok('自訂防守鈕未被裁切（可捲到）', bRect.height > 20 && reachable,
          Math.round(bRect.height) + 'px / scrollH ' + sideEl.scrollHeight);
      }

      /* ── 「快捷鍵 SHORTCUTS」卡片已從原始碼整塊刪除（不是 CSS 隱藏） ── */
      const sideText = ($('#sidebar') || document.body).textContent;
      ok('快捷鍵卡片已從 DOM 移除（無 .panel-tips）',
        document.querySelector('.panel-tips') === null,
        document.querySelectorAll('.panel-tips').length + ' 個殘留');
      ok('側欄已無「快捷鍵 / SHORTCUTS」字樣與 <kbd>',
        sideText.indexOf('SHORTCUTS') === -1 && sideText.indexOf('快捷鍵') === -1 &&
        document.querySelectorAll('#sidebar kbd, kbd').length === 0,
        document.querySelectorAll('kbd').length + ' 個 kbd');
      /* ── 手機防誤觸：畫布 touch-action:none（單手拖曳不會滾到整頁） ── */
      const cvEl = document.querySelector('.board-holder .canvas-container canvas');
      ok('畫布 touch-action:none（手機拖曳不滾頁）',
        !!cvEl && getComputedStyle(cvEl).touchAction === 'none',
        cvEl ? getComputedStyle(cvEl).touchAction : 'no canvas');

      /* ── 左側手冊「➕ 新增戰術」＋名稱輸入框 ── */
      const newBtn = $('#pbNewTactic');
      const nameInput = $('#pbNameInput');
      const newRow = $('.pb-new-row');
      ok('手冊有「新增戰術」按鈕', !!newBtn && newBtn.textContent.indexOf('新增戰術') >= 0);
      ok('新增戰術僅教練可見（coach-only 區塊）',
        !!newRow && newRow.classList.contains('coach-only'));
      ok('名稱輸入框預設提示「請輸入戰術名稱」',
        !!nameInput && nameInput.placeholder === '請輸入戰術名稱',
        nameInput ? nameInput.placeholder : 'none');
      const hintEl = $('.pb-name-hint');
      ok('名稱提示不溢出抽屜', !!hintEl && hintEl.scrollWidth <= hintEl.clientWidth + 1,
        hintEl ? hintEl.scrollWidth + '/' + hintEl.clientWidth : 'none');

      state.mode = 'coach';
      applyMode();
      ok('教練模式看得到新增戰術', !!newBtn && newBtn.offsetParent !== null,
        newBtn ? getComputedStyle(newBtn).display : 'none');
      if (!state.playbookItems.length) {
        const emptyEl = $('#pbList .pb-empty');
        ok('教練空清單文案引導按「新增戰術」',
          !!emptyEl && emptyEl.textContent.indexOf('新增戰術') >= 0,
          emptyEl ? emptyEl.textContent : 'none');
      }

      /* 有未存內容 → 先跳確認框，確認後才清空重設 */
      addStep();
      newBtn.click();
      await wait(150);
      ok('有未存內容時先跳確認框', $('#confirmModal').hidden === false);
      $('#confirmOk').click();
      await wait(260);
      ok('新增戰術後只剩步驟 1',
        state.frames.length === 1 && state.frames[0].name === '步驟 1',
        state.frames.length + '/' + (state.frames[0] || {}).name);
      ok('新增戰術後戰術 id／名稱清空',
        state.tacticId === null && state.tacticName === '',
        state.tacticId + '/' + JSON.stringify(state.tacticName));
      const ntOff = canvas.getObjects().filter(function (o) { return o.kind === 'offense'; }).length;
      const ntDef = canvas.getObjects().filter(function (o) { return o.kind === 'defense'; }).length;
      const ntBall = canvas.getObjects().filter(function (o) { return o.kind === 'ball'; }).length;
      ok('預設 5 攻 5 守 1 球', ntOff === 5 && ntDef === 5 && ntBall === 1,
        ntOff + '/' + ntDef + '/' + ntBall);
      const ntDefBtn = $('#defGrid .def-btn.is-on');
      ok('預設防守為 2-1-2', !!ntDefBtn && ntDefBtn.dataset.preset === '212',
        ntDefBtn ? ntDefBtn.dataset.preset : 'none');
      ok('新增戰術後線條清空', findByKind('line').length === 0, findByKind('line').length);
      ok('名稱輸入框已清空', !!nameInput && nameInput.value === '',
        nameInput ? JSON.stringify(nameInput.value) : 'none');
      ok('名稱輸入框可聚焦（教練直接打名）',
        !!nameInput && (document.activeElement === nameInput || getComputedStyle(nameInput).display !== 'none'),
        document.activeElement ? document.activeElement.tagName : 'none');

      /* 輸入名稱 → state 同步 → 直接存檔（不跳命名彈窗） */
      if (nameInput) {
        nameInput.value = 'HARNESS-新增戰術';
        nameInput.dispatchEvent(new Event('input'));
      }
      ok('輸入名稱同步 state', state.tacticName === 'HARNESS-新增戰術', state.tacticName);
      $('#btnSaveTactic').click();
      await wait(500);
      ok('有名字時直接存檔（不跳命名框）', $('#textModal').hidden === true);
      const savedNames = $$('#pbList .pb-name').map(function (el) { return el.textContent; });
      ok('新戰術出現在左側手冊', savedNames.indexOf('HARNESS-新增戰術') >= 0, savedNames.join('|'));
      const mineItems = state.playbookItems.filter(function (it) { return it.name === 'HARNESS-新增戰術'; });
      for (let mi = 0; mi < mineItems.length; mi++) await store.remove(mineItems[mi].id, mineItems[mi].source);
      await renderPlaybook();

      /* ══════════ 直覺拖曳記錄模式（Drag & Drop Step Recorder） ══════════ */
      /* 自動軌跡線的幾何必須是有限數字（NaN 會畫不出來但計數照樣 +1） */
      function lineFinite(line) {
        const parts = (line && line.getObjects) ? line.getObjects() : [];
        let vals = [];
        parts.forEach(function (p) {
          if (Array.isArray(p.path)) {
            p.path.forEach(function (cmd) { vals = vals.concat(cmd.slice(1)); });
          } else {
            vals = vals.concat([p.x1, p.y1, p.x2, p.y2]);
          }
        });
        return vals.length > 0 && vals.every(function (v) { return typeof v === 'number' && isFinite(v); });
      }
      state.mode = 'coach';
      applyMode();
      const drBall = findNode('ball');
      const drOff1 = findNode('off1');
      const handler0 = getBallHandler();
      ok('拖曳記錄：預設由 off1 持球', !!handler0 && handler0.nodeId === 'off1',
        handler0 ? handler0.nodeId : 'none');
      const ballStartX = drBall.left;
      const ballStartY = drBall.top;
      const handDx = Math.round(ballStartX - drOff1.left);
      const handDy = Math.round(ballStartY - drOff1.top);

      /* ① 拖曳持球者 → 球跟手（運球）+ 自動運球線 */
      beginNodeDrag(drOff1);
      drOff1.set({ left: 380, top: 480 });
      drOff1.setCoords();
      canvas.fire('object:moving', { target: drOff1 });
      ok('拖曳持球者：球跟著手（偏移不變）',
        Math.round(drBall.left - drOff1.left) === handDx && Math.round(drBall.top - drOff1.top) === handDy,
        Math.round(drBall.left - drOff1.left) + ',' + Math.round(drBall.top - drOff1.top));
      canvas.fire('object:modified', { target: drOff1 });
      const drLines1 = findByKind('line');
      ok('拖曳持球者自動生成運球線',
        drLines1.length === 1 && drLines1[0].lineType === 'dribble',
        drLines1.length + '/' + (drLines1[0] || {}).lineType);
      const savedOff1 = (state.frames[state.currentFrame].objects || [])
        .filter(function (o) { return o.nodeId === 'off1'; })[0];
      ok('拖曳後立即寫回步驟座標', !!savedOff1 && Math.round(savedOff1.left) === 380,
        savedOff1 ? Math.round(savedOff1.left) + ',' + Math.round(savedOff1.top) : 'none');
      ok('自動軌跡線標記 autoLine', drLines1.every(function (o) { return o.autoLine === true; }));
      ok('自動運球線幾何有效（非 NaN）', lineFinite(drLines1[0]));
      ok('拖曳後仍由同一人持球', (getBallHandler() || {}).nodeId === 'off1',
        (getBallHandler() || {}).nodeId);

      /* ② 拖曳非持球者 → 切入線、球不動 */
      const drOff4 = findNode('off4');
      const ballBeforeCut = { left: drBall.left, top: drBall.top };
      beginNodeDrag(drOff4);
      drOff4.set({ left: 300, top: 200 });
      canvas.fire('object:moving', { target: drOff4 });
      canvas.fire('object:modified', { target: drOff4 });
      ok('拖曳非持球者生成切入線',
        findByKind('line').filter(function (o) { return o.lineType === 'cut'; }).length === 1,
        findByKind('line').map(function (o) { return o.lineType; }).join(','));
      ok('非持球者拖曳不會帶走球',
        Math.round(drBall.left) === Math.round(ballBeforeCut.left) &&
        Math.round(drBall.top) === Math.round(ballBeforeCut.top),
        Math.round(drBall.left) + ',' + Math.round(drBall.top));

      /* ③ 拖曳防守員 → 防守移動線 */
      const drDef2 = findNode('def2');
      beginNodeDrag(drDef2);
      drDef2.set({ left: 430, top: 570 });
      canvas.fire('object:moving', { target: drDef2 });
      canvas.fire('object:modified', { target: drDef2 });
      ok('拖曳防守員生成防守移動線',
        findByKind('line').filter(function (o) { return o.lineType === 'def'; }).length === 1,
        findByKind('line').map(function (o) { return o.lineType; }).join(','));

      /* ④ 微幅拖曳 → 不畫線（避免微調就冒出一條線） */
      const drOff3 = findNode('off3');
      const beforeShort = findByKind('line').length;
      beginNodeDrag(drOff3);
      drOff3.set({ left: drOff3.left + 5, top: drOff3.top + 3 });
      canvas.fire('object:moving', { target: drOff3 });
      canvas.fire('object:modified', { target: drOff3 });
      ok('微幅拖曳不生成線條', findByKind('line').length === beforeShort,
        findByKind('line').length + ' vs ' + beforeShort + ' | pos=' +
        Math.round(drOff3.left) + ',' + Math.round(drOff3.top));

      /* ④-b 防手震門檻：滑鼠 6px、觸控 10px（觸控另存 touch 旗標） */
      ok('滑鼠防手震門檻 6px', dragEpsOf(null) === 6 && dragEpsOf({ touch: false }) === 6,
        dragEpsOf(null));
      ok('觸控防手震門檻 10px', dragEpsOf({ touch: true }) === 10, dragEpsOf({ touch: true }));
      const dragTouchProbe = findNode('off2');
      beginNodeDrag(dragTouchProbe, { type: 'touchstart' });
      ok('觸控拖曳會記下 touch 旗標', !!state.nodeDrag && state.nodeDrag.touch === true,
        state.nodeDrag ? String(state.nodeDrag.touch) : 'no drag');
      beginNodeDrag(dragTouchProbe, { type: 'mousedown' });
      ok('滑鼠拖曳不會誤標為觸控', !!state.nodeDrag && state.nodeDrag.touch === false,
        state.nodeDrag ? String(state.nodeDrag.touch) : 'no drag');
      state.nodeDrag = null;

      /* ④-c 傳球 hit-test：球心落在圓圈內時，即使距離後備關閉（radius=0）也判定命中 */
      const hitProbe = findNode('off4') || findNode('off5');
      if (hitProbe && hitProbe.setCoords) hitProbe.setCoords();
      ok('球心落在隊友圓圈內即判定命中（radius=0）',
        !!hitProbe && nearestOffense({ x: hitProbe.left + 4, y: hitProbe.top + 2 }, 0) === hitProbe,
        hitProbe ? hitProbe.nodeId + ' @' + Math.round(hitProbe.left) + ',' + Math.round(hitProbe.top) : 'no node');

      /* ⑤ 傳球：拖球到 off5 身上 */
      const drOff5 = findNode('off5');
      const beforePass = findByKind('line').length;
      beginNodeDrag(drBall);
      drBall.set({ left: drOff5.left + 8, top: drOff5.top + 6 });
      canvas.fire('object:moving', { target: drBall });
      ok('拖球時亮起傳球候選圈',
        canvas.getObjects().some(function (o) { return o.kind === 'ghost'; }));
      canvas.fire('object:modified', { target: drBall });
      ok('拖球到隊友身上生成傳球虛線',
        findByKind('line').length === beforePass + 1 &&
        findByKind('line').filter(function (o) { return o.lineType === 'pass'; }).length === 1,
        findByKind('line').map(function (o) { return o.lineType; }).join(','));
      ok('球吸附到該隊友手上（+22/+18）',
        Math.round(drBall.left) === Math.round(drOff5.left + 22) &&
        Math.round(drBall.top) === Math.round(drOff5.top + 18),
        Math.round(drBall.left - drOff5.left) + ',' + Math.round(drBall.top - drOff5.top));
      ok('自動傳球線幾何有效（非 NaN）',
        lineFinite(findByKind('line').filter(function (o) { return o.lineType === 'pass'; })[0]));
      ok('傳球後由新隊友持球', (getBallHandler() || {}).nodeId === 'off5',
        (getBallHandler() || {}).nodeId);
      ok('傳球後候選圈已清除且不入庫',
        canvas.getObjects().every(function (o) { return o.kind !== 'ghost'; }) &&
        serializeCanvas().every(function (o) { return o.kind !== 'ghost'; }));

      /* ⑥ 傳回自己手上 → 只吸附、不畫線 */
      const beforeSame = findByKind('line').length;
      beginNodeDrag(drBall);
      drBall.set({ left: drOff5.left + 38, top: drOff5.top - 16 });
      canvas.fire('object:moving', { target: drBall });
      canvas.fire('object:modified', { target: drBall });
      ok('球放回同一人手上不畫線', findByKind('line').length === beforeSame,
        findByKind('line').length + ' vs ' + beforeSame);

      /* ⑦ 「＋」不繼承自動軌跡，但保留手畫線 */
      canvas.add(buildLineObj('screen', { x: 120, y: 760 }, { x: 340, y: 760 }));
      saveCurrentFrame();
      addStep();
      const step2 = state.frames[1];
      ok('新增步驟不繼承自動軌跡線',
        (step2.objects || []).every(function (o) { return !(o.kind === 'line' && o.autoLine); }),
        (step2.objects || []).filter(function (o) { return o.kind === 'line'; })
          .map(function (o) { return o.lineType; }).join(','));
      ok('新增步驟保留手畫線條',
        (step2.objects || []).some(function (o) { return o.kind === 'line' && !o.autoLine; }));
      ok('新增步驟複製球員位置',
        (step2.objects || []).filter(function (o) { return o.kind === 'offense'; }).length === 5 &&
        (step2.objects || []).filter(function (o) { return o.kind === 'offense'; })
          .every(function (o) { return typeof o.left === 'number' && typeof o.top === 'number'; }));

      /* ⑧ 下一步自動改由新持球者持球（含「已被移走就不覆寫」護欄） */
      await renderFrame(0);
      const nextBallObj = (state.frames[1].objects || []).filter(function (o) { return o.kind === 'ball'; })[0];
      nextBallObj.left = 120;
      nextBallObj.top = 120;
      const pA = findNode('off2');
      const bA = findNode('ball');
      beginNodeDrag(bA);
      bA.set({ left: pA.left + 4, top: pA.top + 4 });
      canvas.fire('object:moving', { target: bA });
      canvas.fire('object:modified', { target: bA });
      ok('下一步的球已被移走時不覆寫',
        Math.round(nextBallObj.left) === 120 && Math.round(nextBallObj.top) === 120,
        Math.round(nextBallObj.left) + ',' + Math.round(nextBallObj.top));

      const oldHandlerInNext = (state.frames[1].objects || [])
        .filter(function (o) { return o.nodeId === 'off2'; })[0];
      nextBallObj.left = oldHandlerInNext.left + 22;
      nextBallObj.top = oldHandlerInNext.top + 18;
      const pB = findNode('off3');
      const bB = findNode('ball');
      beginNodeDrag(bB);
      bB.set({ left: pB.left + 5, top: pB.top + 5 });
      canvas.fire('object:moving', { target: bB });
      canvas.fire('object:modified', { target: bB });
      const nextOff3 = (state.frames[1].objects || []).filter(function (o) { return o.nodeId === 'off3'; })[0];
      ok('下一步自動改由新持球者持球',
        Math.round(nextBallObj.left) === Math.round(nextOff3.left + 22) &&
        Math.round(nextBallObj.top) === Math.round(nextOff3.top + 18),
        Math.round(nextBallObj.left - nextOff3.left) + ',' + Math.round(nextBallObj.top - nextOff3.top));

      /* ⑨ 拖曳可復原 */
      const undoNode = findNode('def4');
      const undoSaved = { left: undoNode.left, top: undoNode.top };
      beginNodeDrag(undoNode);
      undoNode.set({ left: 240, top: 300 });
      canvas.fire('object:moving', { target: undoNode });
      canvas.fire('object:modified', { target: undoNode });
      ok('拖曳已進入復原堆疊', state.undo.length > 0, state.undo.length);
      undo();
      await wait(260);
      const undoBack = findNode('def4');
      ok('復原回到拖曳前位置',
        !!undoBack && Math.round(undoBack.left) === Math.round(undoSaved.left),
        undoBack ? Math.round(undoBack.left) + ',' + Math.round(undoBack.top) : 'none');

      /* ⑩ 球員模式 / 播放中拖曳無效 */
      state.mode = 'player';
      applyMode();
      const guardNode = findNode('def3');
      const guardLines = findByKind('line').length;
      beginNodeDrag(guardNode);
      guardNode.set({ left: guardNode.left + 90, top: guardNode.top + 90 });
      canvas.fire('object:moving', { target: guardNode });
      canvas.fire('object:modified', { target: guardNode });
      ok('球員模式拖曳不生線條', findByKind('line').length === guardLines,
        findByKind('line').length + ' vs ' + guardLines);
      state.mode = 'coach';
      applyMode();
      state.playing = true;
      const playLines = findByKind('line').length;
      beginNodeDrag(findNode('def1'));
      canvas.fire('object:modified', { target: findNode('def1') });
      ok('播放中拖曳不生線條', findByKind('line').length === playLines);
      state.playing = false;

      /* ⑪ 球丟到場外 → clamp 回球場內 */
      const clampBall = findNode('ball');
      beginNodeDrag(clampBall);
      clampBall.set({ left: -140, top: 1200 });
      canvas.fire('object:modified', { target: clampBall });
      ok('球丟到場外會收回球場內',
        clampBall.left >= 0 && clampBall.left <= BASE_W && clampBall.top >= 0 && clampBall.top <= BASE_H,
        Math.round(clampBall.left) + ',' + Math.round(clampBall.top));
      saveCurrentFrame();

      /* 球員模式：新增戰術與名稱框都要消失 */
      state.mode = 'player';
      applyMode();
      ok('球員模式隱藏新增戰術',
        newRow.offsetParent === null && newBtn.offsetParent === null,
        getComputedStyle(newRow).display + '/' + (newBtn.offsetParent ? 'laid-out' : 'hidden'));
      ok('球員模式隱藏名稱輸入框',
        getComputedStyle(newRow).display === 'none', getComputedStyle(newRow).display);
      state.mode = 'coach';
      applyMode();

      ok('無水平溢出', document.documentElement.scrollWidth <= window.innerWidth + 1,
        document.documentElement.scrollWidth + '/' + window.innerWidth);
      ok('無 JS 例外', true);
    } catch (err) {
      log.push('ERROR ' + (err && err.message ? err.message : err));
    }
    flush();
  }
})();
