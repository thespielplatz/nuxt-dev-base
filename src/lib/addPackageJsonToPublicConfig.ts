import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Nuxt } from 'nuxt/schema'
import defu from 'defu'
import consola from 'consola'
import { z } from 'zod'

const packageJsonSchema = z.object({
  version: z.string().default('no version'),
  meta: z.object({
    'special-version': z.string().optional(),
  }).optional(),
  homepage: z.string().optional(),
})

export default (nuxt: Nuxt) => {
  const packageJsonPath = join(process.cwd(), 'package.json')

  let packageJsonContent = ''
  try {
    packageJsonContent = readFileSync(packageJsonPath, 'utf-8')
  } catch {
    consola.error('Error loading package.json from path:', packageJsonPath)
  }

  try {
    const json = JSON.parse(packageJsonContent)
    const packageJson = packageJsonSchema.parse(json)

    nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public, {
      releasedVersion: packageJson.version,
      version: packageJson.meta?.['special-version'] || packageJson.version,
      githubLink: packageJson.homepage || '',
    })
  } catch (error) {
    consola.error('Error parsing package.json:', error)
  }
}
