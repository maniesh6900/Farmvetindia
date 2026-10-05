/**
 * Overflow probe: loads the site in headless Chrome at phone widths and reports
 * any element whose box extends beyond the viewport (the cause of the
 * "wider than content" dead space on the right).
 *
 * Usage: node scripts/overflow-check.mjs [url]
 */
import puppeteer from 'puppeteer-core'
import os from 'node:os'
import path from 'node:path'
import fs from 'node:fs'

const url = process.argv[2] ?? 'http://localhost:5199/'

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    path.join(process.env.LOCALAPPDATA ?? '', 'Google/Chrome/Application/chrome.exe'),
    path.join(process.env['ProgramFiles(x86)'] ?? '', 'Google/Chrome/Application/chrome.exe'),
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean)
  for (const c of candidates) {
    try {
      if (fs.existsSync(c)) return c
    } catch {}
  }
  throw new Error('Chrome not found — set CHROME_PATH env var')
}

const browser = await puppeteer.launch({
  executablePath: findChrome(),
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu'],
})

const page = await browser.newPage()

for (const [w, h] of [
  [390, 844],
  [360, 800],
  [768, 1024],
]) {
  await page.setViewport({ width: w, height: h })
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
  await new Promise((r) => setTimeout(r, 600))

  const report = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth
    const out = { vw, scrollW: document.documentElement.scrollWidth, offenders: [] }
    for (const el of document.querySelectorAll('body *')) {
      // Skip anything inside the clipped drawer/modal roots — they're intentionally
      // parked off-screen and clipped by their fixed parents.
      if (el.closest('.drawer-root, .modal-overlay')) continue
      const r = el.getBoundingClientRect()
      if (r.width === 0 && r.height === 0) continue
      if (r.right > vw + 1 || r.left < -1) {
        out.offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className && typeof el.className === 'string' ? el.className : '').slice(0, 60),
          left: Math.round(r.left),
          right: Math.round(r.right),
          w: Math.round(r.width),
        })
      }
    }
    out.offenders.sort((a, b) => b.right - a.right)
    out.offenders = out.offenders.slice(0, 12)
    return out
  })

  console.log(`\n=== Viewport ${w}x${h} ===`)
  console.log(`clientWidth=${report.vw} scrollWidth=${report.scrollW} overflow=${report.scrollW - report.vw}px`)
  if (report.offenders.length === 0) {
    console.log('No horizontal overflow detected 🎉')
  } else {
    for (const o of report.offenders) {
      console.log(`  <${o.tag} class="${o.cls}"> left=${o.left} right=${o.right} w=${o.w}`)
    }
  }
}

await browser.close()
