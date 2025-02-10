import { readFileSync } from 'node:fs'
import path from 'node:path'

export const loadFileContentsFromData = (fileName: string) => {
  const filePath = path.resolve(process.cwd(), 'data', fileName)
  try {
    const fileContent = readFileSync(filePath, 'utf-8')
    return fileContent
  } catch {
    return null
  }
}
