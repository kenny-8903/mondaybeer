param(
  [string]$Mode = 'coach',
  [int]$Width = 1484,
  [int]$Height = 900,
  [string]$Out = '.scratch\shot.png',
  [string]$ExtraJs = ''
)

$root = Split-Path -Parent $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }
$src = Join-Path $root 'index.html'
$html = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8)

$inject = @"
<style>#loader,.loader{display:none!important}</style>
<script>
window.addEventListener('load', function () {
  setTimeout(function () {
    try {
      if (typeof state !== 'undefined') { state.mode = '$Mode'; applyMode(); }
      $ExtraJs
    } catch (e) { console.error('HARNESS', e); }
  }, 900);
});
</script>
"@

$html = $html.Replace('</body>', $inject + '</body>')
$preview = Join-Path $root '.scratch\preview.html'
[System.IO.File]::WriteAllText($preview, $html, (New-Object System.Text.UTF8Encoding($false)))

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$outPath = Join-Path $root $Out
if (Test-Path $outPath) { Remove-Item -LiteralPath $outPath -Force }
$url = 'file:///' + ($preview -replace '\\', '/')

& $chrome --headless=new --disable-gpu --hide-scrollbars --no-first-run --allow-file-access-from-files `
  --window-size="$Width,$Height" --virtual-time-budget=9000 --screenshot="$outPath" "$url" 2>$null | Out-Null

if (Test-Path $outPath) { "PNG $outPath $((Get-Item $outPath).Length)" } else { 'PNG MISSING' }
