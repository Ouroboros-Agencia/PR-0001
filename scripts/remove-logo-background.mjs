import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const source = path.join(root, 'public', 'media', 'image.png')
const output = path.join(root, 'src', 'assets', 'images', 'alianza-progreso-logo.png')

await fs.mkdir(path.dirname(output), { recursive: true })

try {
  await fs.access(source)
} catch {
  console.error('Coloca el logo original en public/media/image.png')
  process.exit(1)
}

const image = sharp(source).ensureAlpha()
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true })
const visited = new Uint8Array(info.width * info.height)
const queue = []

for (let x = 0; x < info.width; x += 1) {
  enqueue(x, 0)
  enqueue(x, info.height - 1)
}

for (let y = 0; y < info.height; y += 1) {
  enqueue(0, y)
  enqueue(info.width - 1, y)
}

while (queue.length > 0) {
  const current = queue.shift()

  if (!current) {
    continue
  }

  const { x, y } = current
  const pixelIndex = y * info.width + x
  const dataIndex = pixelIndex * info.channels

  data[dataIndex + 3] = 0

  enqueue(x + 1, y)
  enqueue(x - 1, y)
  enqueue(x, y + 1)
  enqueue(x, y - 1)
}

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: info.channels,
  },
})
  .png({ compressionLevel: 9 })
  .toFile(output)

console.log('Logo sin fondo generado en src/assets/images/alianza-progreso-logo.png')

function enqueue(x, y) {
  if (x < 0 || y < 0 || x >= info.width || y >= info.height) {
    return
  }

  const pixelIndex = y * info.width + x

  if (visited[pixelIndex]) {
    return
  }

  const dataIndex = pixelIndex * info.channels
  const red = data[dataIndex]
  const green = data[dataIndex + 1]
  const blue = data[dataIndex + 2]
  const alpha = data[dataIndex + 3]
  const isWhiteBackground = red > 242 && green > 242 && blue > 242 && alpha > 0

  if (!isWhiteBackground) {
    return
  }

  visited[pixelIndex] = 1
  queue.push({ x, y })
}
