import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'
import consola from 'consola'
import '@nuxt/schema'
import type { Nuxt } from '@nuxt/schema'
import defu from 'defu'
import loadPackageJsonToPublicConfig from './lib/loadPackageJsonToPublicConfig'
import loadLegalPagesToPublicConfig from './lib/loadLegalPagesToPublicConfig'
import { addConsolaPrefix } from './lib/addConsolaPrefix'

// Module options TypeScript interface definition
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

const defaults: ModuleOptions = {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-dev-base',
    configKey: 'nuxtDevBase',
  },
  // Default configuration options of the Nuxt module
  defaults,
  setup(options, nuxt) {
    consola.info(addConsolaPrefix('Setup'))

    registerAll()
    addDataToPublicConfig(nuxt)
  },
})

const registerAll = () => {
  const { resolve } = createResolver(import.meta.url)
  const runtimeDir = resolve('./runtime')

  addPlugin(resolve(runtimeDir, 'plugins/useLocalStorage'))
  addComponentsDir({
    path: resolve(runtimeDir, 'components'),
  })
}

const addDataToPublicConfig = (nuxt: Nuxt) => {
  const packageJsonData = loadPackageJsonToPublicConfig()
  const legalPagesData = loadLegalPagesToPublicConfig()

  nuxt.options.runtimeConfig.public = defu(
    nuxt.options.runtimeConfig.public,
    packageJsonData,
    legalPagesData,
  )
}
