// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  components: true,
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  ui: {
    colorMode: false,
  },
  compatibilityDate: '2024-11-01',
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'ru', language: 'ru-RU', name: 'Русский' },
    ],
    lazy: true,
    strategy: 'prefix',
    defaultLocale: 'ru',
  },
})
