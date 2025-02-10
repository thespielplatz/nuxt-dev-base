import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addServerScanDir } from '@nuxt/kit'
import '@nuxt/schema'
import type { Nuxt } from '@nuxt/schema'
import defu from 'defu'
import loadPackageJsonData from './lib/loadPackageJsonData'

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    devBase: InternalOptions
  }
}

export interface InternalOptions {
  releasedVersion: string | null,
  version: string | null,
  githubLink: string | null,
}

export default defineNuxtModule({
  meta: {
    name: 'nuxt-dev-base',
    configKey: 'nuxtDevBase',
  },
  // Default configuration options of the Nuxt module
  setup(options, nuxt) {
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
  addServerScanDir(resolve(runtimeDir, 'server'))
}

const addDataToPublicConfig = (nuxt: Nuxt) => {
  const packageJsonData = loadPackageJsonData()

  nuxt.options.runtimeConfig.public.devBase = defu(
    nuxt.options.runtimeConfig.public.devBase,
    packageJsonData,
  )
}
