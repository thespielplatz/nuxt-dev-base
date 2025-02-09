import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'
import consola from 'consola'
import '@nuxt/schema'
import addPackageJsonToPublicConfig from './lib/addPackageJsonToPublicConfig'
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
    addPackageJsonToPublicConfig(nuxt)
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
