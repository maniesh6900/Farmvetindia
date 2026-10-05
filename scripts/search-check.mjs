/**
 * Search smoke test: types a query into the header search and counts rendered cards.
 * Usage: node scripts/search-check.mjs [url]
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
    path.join(process.env.LOCALAPPDATA ?? '', 'Google/Chrome/Application/chrome.exe'),
    '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean)
  for (const c of candidates) if (fs.existsSync(c)) return c
  throw new Error('Chrome not found')
}

const browser = await puppeteer.launch({
  executablePath: findChrome(),
  headless: 'new',
  args: ['--no-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1280, height: 900 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

const count = () => page.$$eval('.grid .card', (els) => els.length)

const baseline = await count()

await page.type('#search-input', 'calcium')
await new Promise((r) => setTimeout(r, 500))
const filtered = await count()
const firstCard = await page.$eval('.grid .card .card-name', (el) => el.textContent)
const meta = (await page.$('.results-meta')) ? await page.$eval('.results-meta', (el) => el.textContent.trim()) : '(no meta)'

await page.click('.clear-search')
await new Promise((r) => setTimeout(r, 500))
const cleared = await count()

await page.type('#search-input', 'zzzz-no-match')
await new Promise((r) => setTimeout(r, 500))
const emptyShown = Boolean(await page.$('.empty'))

console.log(`baseline cards: ${baseline}`)
console.log(`after "calcium": ${filtered} — first: ${firstCard}`)
console.log(`meta: ${meta}`)
console.log(`after clear: ${cleared}`)
console.log(`no-match empty state: ${emptyShown}`)

await browser.close()
