import { readFileSync } from 'node:fs'
import path from 'node:path'
import consola from 'consola'
import { z } from 'zod'
import { addConsolaPrefix } from './addConsolaPrefix'

const packageJsonSchema = z.object({
  version: z.string().default(''),
  meta: z.object({
    'special-version': z.string().default(''),
  }).optional(),
  homepage: z.string().default(''),
})

export default (): {
  releasedVersion: string,
  version: string,
  githubLink: string,
} => {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json')

  let packageJsonContent
  try {
    packageJsonContent = readFileSync(packageJsonPath, 'utf-8')
  } catch {
    consola.warn(addConsolaPrefix('Error loading package.json from path:'), packageJsonPath)
    return createEmptyResult()
  }

  let packageJson
  try {
    const json = JSON.parse(packageJsonContent)
    packageJson = packageJsonSchema.parse(json)
  } catch (error) {
    consola.warn(addConsolaPrefix('Error parsing package.json:'), error)
    return createEmptyResult()
  }

  consola.info(addConsolaPrefix('Loaded infos from package.json'))
  return {
    releasedVersion: packageJson.version,
    version: packageJson.meta?.['special-version'] || packageJson.version,
    githubLink: packageJson.homepage || '',
  }
}

const createEmptyResult = () => {
  return {
    releasedVersion: '',
    version: '',
    githubLink: '',
  }
}
