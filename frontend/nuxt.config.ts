// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/strapi',
    '@nuxt/image',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  image: {
    providers: {
      strapi: {
        options: {
          url: process.env.STRAPI_URL,
        }
      }
    },
  }
  
})