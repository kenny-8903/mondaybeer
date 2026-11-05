param(
  [int]$Width = 1484,
  [int]$Height = 900,
  [string]$Tag = 'desktop'
)

$root = (Get-Location).Path
$src = Join-Path $root 'index.html'
$html = [System.IO.File]::ReadAllText($src, [System.Text.Encoding]::UTF8)

$inject = @"
<style>#loader,.loader{display:none!important}*,*::before,*::after{transition:none!important}</style>
<script src="./test.js"></script>
"@

$html = $html.Replace('</body>', $inject + '</body>')
$preview = Join-Path $root '.scratch\preview-test.html'
[System.IO.File]::WriteAllText($preview, $html, (New-Object System.Text.UTF8Encoding($false)))

$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$dom = Join-Path $root ('.scratch\dom-' + $Tag + '.html')
$url = 'file:///' + ($preview -replace '\\', '/')

& $chrome --headless=new --disable-gpu --hide-scrollbars --no-first-run --allow-file-access-from-files `
  --window-size="$Width,$Height" --virtual-time-budget=25000 --dump-dom "$url" 2>$null |
  Out-File -FilePath $dom -Encoding utf8

$text = [System.IO.File]::ReadAllText($dom, [System.Text.Encoding]::UTF8)
$m = [regex]::Match($text, '<pre id="testout">([\s\S]*?)</pre>')
if ($m.Success) {
  $body = $m.Groups[1].Value
  $body = $body.Replace('&lt;', '<').Replace('&gt;', '>').Replace('&amp;', '&')
  $fails = ([regex]::Matches($body, '(?m)^FAIL')).Count
  "=== $Tag (${Width}x${Height}) ==="
  $body
  "--- FAILS: $fails ---"
} else {
  'NO TEST OUTPUT - boot failed or timed out'
}
