import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'
import consola from 'consola'
import '@nuxt/schema'
import type { Nuxt } from 'nuxt/schema'

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
  setup(_options, _nuxt) {
    consola.info('Dev Base Module: Setup')

    registerAll(_nuxt)
  },
})

const registerAll = (nuxt: Nuxt) => {
  const { resolve } = createResolver(import.meta.url)
  const runtimeDir = resolve('./runtime')

  addPlugin(resolve(runtimeDir, 'plugins/useLocalStorage'))
  addComponentsDir({
    path: resolve(runtimeDir, 'components'),
  })
  addComponentsDir({
    path: resolve(runtimeDir, 'components', 'footer'),
  })
  addComponentsDir({
    path: resolve(runtimeDir, 'components', 'typography'),
  })
}
