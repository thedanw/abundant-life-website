<#
.SYNOPSIS
    Fixes encoding corruption in planning/page markdown files.
.DESCRIPTION
    Replaces ??? with em-dashes, fixes corrupted emoji headers,
    and standardises REWRITE/Checklist headers to match completed pattern.
.NOTES
    Run from the project root:
      powershell -ExecutionPolicy Bypass -File planning/fix-encoding.ps1
#>

$ErrorActionPreference = 'Stop'

# Files to process
$files = @(
    'planning\pages\connect\groups.md',
    'planning\pages\connect\serve.md'
)

# Counters
$totalFiles   = 0
$totalChanges = 0

foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        Write-Warning "File not found: $file - skipping."
        continue
    }

    $original = Get-Content -Path $file -Raw -Encoding UTF8
    $content  = $original
    $changes  = 0

    # 1. Fix REWRITE section headers (use .Replace for literal strings)
    $content = $content.Replace('## ?????? REWRITE ??? Brand-Aligned Groups Page', '## ✍️ REWRITE — Brand-Aligned Groups Page')
    $content = $content.Replace('## ?????? REWRITE ??? Brand-Aligned Serve Page', '## ✍️ REWRITE — Brand-Aligned Serve Page')
    $content = $content.Replace('## ?????? REWRITE ??? Brand-Aligned ', '## ✍️ REWRITE — Brand-Aligned ')

    # 2. Fix Rewrite Checklist header
    $content = $content.Replace('## ??? Rewrite Checklist', '## ✅ Rewrite Checklist')

    # 3. Fix corrupted emoji sub-headers (serve.md teams)
    $content = $content.Replace('### ????? Prayer & Pastoral Care Team', '### 🙏 Prayer & Pastoral Care Team')
    $content = $content.Replace('### ????? Outreach & Missions Team', '### 🌍 Outreach & Missions Team')
    $content = $content.Replace('### ????? Operations & Facilities Team', '### 🔧 Operations & Facilities Team')

    # 4. Fix title line encoding
    $content = $content.Replace('# Connect/Groups Page ??? ', '# Connect/Groups Page — ')
    $content = $content.Replace('# Connect/Serve Page ??? ', '# Connect/Serve Page — ')

    # 5. Fix Meta Tags
    $content = $content.Replace('Life Groups & Communities ??? Find Your People', 'Life Groups & Communities — Find Your People')
    $content = $content.Replace('Serve Teams ??? Use Your Gifts', 'Serve Teams — Use Your Gifts')

    # 6. Fix H1 lines
    $content = $content.Replace('### H1: Groups ??? Find Your People', '### H1: Groups — Find Your People')
    $content = $content.Replace('### H1: Serve Teams ??? Find Your Place to Minister', '### H1: Serve Teams — Find Your Place to Minister')

    # 7. Fix scripture references (1 Cor 12:12???27 etc.)
    $content = $content.Replace('1 Cor 12:12???27', '1 Cor 12:12–27')
    $content = $content.Replace('Ephesians 4:11???12', 'Ephesians 4:11–12')

    # 8. Fix CTA link text
    $content = $content.Replace('[**Apply to Lead ???**]', '[**Apply to Lead →**]')
    $content = $content.Replace('[**Find Your Group ???**]', '[**Find Your Group →**]')
    $content = $content.Replace('[**Plan Your Visit ???**]', '[**Plan Your Visit →**]')
    $content = $content.Replace('[**Join the Hospitality Team ???**]', '[**Join the Hospitality Team →**]')
    $content = $content.Replace('[**Join the Prayer Team ???**]', '[**Join the Prayer Team →**]')
    $content = $content.Replace('[**Join the Outreach Team ???**]', '[**Join the Outreach Team →**]')

    # 9. Fix scripture attribution
    $content = $content.Replace('??? **1 Corinthians 12:12 (NKJV)**', '— **1 Corinthians 12:12 (NKJV)**')
    $content = $content.Replace('??? **Ephesians 4:11???12 (NKJV)**', '— **Ephesians 4:11–12 (NKJV)**')

    # 10. Replace all remaining ??? with em-dash (literal, not regex)
    $content = $content.Replace('???', [char]0x2014)

    # 11. Write back if changed
    if ($content -ne $original) {
        Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
        $changes = ($original.Split([char]0x2014).Count - 1) + ($original.Split('?').Count - 1) / 3
        $totalChanges += [math]::Round($changes)
        Write-Host "OK $file - encoding fixed" -ForegroundColor Green
    } else {
        Write-Host "SKIP $file - no changes needed" -ForegroundColor DarkGray
    }

    $totalFiles++
}

Write-Host ""
Write-Host "Files processed: $totalFiles" -ForegroundColor Cyan
