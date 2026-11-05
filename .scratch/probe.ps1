param(
  [int]$Width = 420,
  [int]$Height = 820,
  [string]$Js = ''
)

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root 'index.html'
$html = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8)

$inject = @"
<style>#loader,.loader{display:none!important}</style>
<script>
window.addEventListener('load', function () {
  setTimeout(function () {
    var out = [];
    try { $Js } catch (e) { out.push('ERR ' + (e && e.message ? e.message : e)); }
    var pre = document.createElement('pre');
    pre.id = 'probe';
    pre.textContent = out.join('\n');
    document.body.appendChild(pre);
  }, 1000);
});
</script>
"@

$html = $html.Replace('</body>', $inject + '</body>')
$preview = Join-Path $PSScriptRoot 'probe.html'
[System.IO.File]::WriteAllText($preview, $html, (New-Object System.Text.UTF8Encoding($false)))

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$dom = Join-Path $PSScriptRoot 'probe-dom.html'
$url = 'file:///' + ($preview -replace '\\', '/')

& $chrome --headless=new --disable-gpu --hide-scrollbars --no-first-run --allow-file-access-from-files `
  --window-size="$Width,$Height" --virtual-time-budget=12000 --dump-dom "$url" 2>$null |
  Out-File -FilePath $dom -Encoding utf8

$text = [System.IO.File]::ReadAllText($dom, [System.Text.Encoding]::UTF8)
$m = [regex]::Match($text, '<pre id="probe">([\s\S]*?)</pre>')
if ($m.Success) {
  $m.Groups[1].Value.Replace('&lt;', '<').Replace('&gt;', '>').Replace('&amp;', '&')
} else {
  'NO PROBE OUTPUT'
}
