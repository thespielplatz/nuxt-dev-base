// These types are only necessary for the playground
import type { LocalStoragePlugin, Storage } from '../../src/runtime/plugins/useLocalStorage'

declare module '#app' {
  interface NuxtApp {
    $localStorage: LocalStoragePlugin & Storage
  }
}

declare module 'nuxt/app' {
  interface NuxtApp {
    $localStorage: LocalStoragePlugin & Storage
  }
}
