import AccessoriesList, { type Accessory } from './AccessoriesList'
import fs from 'fs'
import path from 'path'

export default async function AccessoriesPage() {
  const dir = path.join(process.cwd(), 'public', 'images', 'accesorios')
  let items: Accessory[] = []
  try {
    const folders = fs.readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory())
    items = folders.map((f) => {
      const folderPath = path.join(dir, f.name)
      const files = fs.readdirSync(folderPath).filter(fn => /\.(png|jpe?g|webp)$/i.test(fn))
      const images = files.map(fn => `/images/accesorios/${f.name}/${fn}`)
      return {
        id: f.name.replace(/\s+/g, '_').toLowerCase(),
        name: f.name,
        images,
      }
    })
  } catch {}
  return <AccessoriesList items={items} />
}


