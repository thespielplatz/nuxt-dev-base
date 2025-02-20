export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxt/ui',
  ],
  devtools: {
    enabled: true,
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'info', 'success', 'warning', 'error', 'footer'],
    },
  },
  compatibilityDate: '2025-01-20',
  typescript: {
    typeCheck: true,
  },
})
