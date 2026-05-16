/**
 * Ensures every placePublicImage / p('folderKey', 'file') path exists under public/.
 * Optional: --fetch=http://127.0.0.1:4173  (run `npm run preview` in another shell first).
 * Run: node scripts/verify-public-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const srcDir = path.join(root, 'src')
const fetchBase = process.argv.find((a) => a.startsWith('--fetch='))?.slice('--fetch='.length)

function encodePublicPathSegment(segment) {
  return encodeURIComponent(segment).replace(/%2C/g, ',')
}

const PLACE_IMAGE_FOLDERS = {
  araku: 'araku valley pics',
  borra: 'Borra Caves pics',
  rkBeach: 'Rama Krishna Beach pics',
  tirumala: 'Sri Venkateswara Temple, Tirumala pics',
  belum: 'Belum Caves pics',
  horsley: 'Horsley Hills pics',
}

const re = /p\s*\(\s*['"](\w+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)/g

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name)
    if (name.isDirectory()) walk(full, out)
    else if (/\.(jsx?|tsx?)$/.test(name.name)) out.push(full)
  }
  return out
}

const pairs = new Map()
for (const file of walk(srcDir)) {
  const text = fs.readFileSync(file, 'utf8')
  let m
  while ((m = re.exec(text)) !== null) {
    const key = m[1]
    const fileName = m[2]
    const folder = PLACE_IMAGE_FOLDERS[key]
    if (!folder) {
      console.error(`Unknown folder key "${key}" in ${path.relative(root, file)}`)
      process.exitCode = 1
      continue
    }
    pairs.set(`${key}::${fileName}`, { folder, fileName, from: path.relative(root, file) })
  }
}

let missing = 0
for (const { folder, fileName, from } of pairs.values()) {
  const abs = path.join(publicDir, folder, fileName)
  if (!fs.existsSync(abs)) {
    console.error(`MISSING: ${folder}/${fileName} (referenced from ${from})`)
    missing += 1
    process.exitCode = 1
  }
}

console.log(`Checked ${pairs.size} unique public image paths — ${missing === 0 ? 'all found' : `${missing} missing`}.`)

if (fetchBase && missing === 0) {
  const origin = fetchBase.replace(/\/?$/, '')
  let bad = 0
  for (const { folder, fileName } of pairs.values()) {
    const pathname = `/${encodePublicPathSegment(folder)}/${encodePublicPathSegment(fileName)}`
    const url = `${origin}${pathname}`
    const res = await fetch(url, { method: 'HEAD' })
    const ct = res.headers.get('content-type') || ''
    if (!res.ok || !ct.includes('image')) {
      console.error(`HTTP ${res.status} ${url} content-type=${ct}`)
      bad += 1
    }
  }
  if (bad) {
    process.exitCode = 1
    console.error(`HEAD checks: ${bad} failed.`)
  } else {
    console.log(`HEAD checks: ${pairs.size} URLs return image/* on ${origin}.`)
  }
}
