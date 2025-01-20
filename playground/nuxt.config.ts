export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/tailwindcss',
  ],
  devtools: {
    enabled: true,
  },
  compatibilityDate: '2025-01-20',
  typescript: {
    typeCheck: true,
  },
  tailwindcss: {
    config: {
      content: [
        '../src/runtime/components/**/*.{vue,ts}',
      ],
    },
  },
})
