import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const domain = 'tuamigosacha.com'

await fs.mkdir(distDir, { recursive: true })
await fs.writeFile(path.join(distDir, 'CNAME'), `${domain}\n`)
await fs.writeFile(path.join(distDir, '.nojekyll'), '')
await fs.copyFile(path.join(distDir, 'index.html'), path.join(distDir, '404.html'))

console.log(`GitHub Pages preparado para https://${domain}`)
