export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxt/ui',
  ],
  devtools: {
    enabled: true,
  },
  compatibilityDate: '2025-01-20',
  typescript: {
    typeCheck: true,
  },
})
