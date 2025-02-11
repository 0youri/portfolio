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
  app: {
    head: {
      title: "YN Portfolio",
    }
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  image: {
    providers: {
      strapi: {
        options: {
          baseURL: process.env.STRAPI_URL || 'http://localhost:1337',
        }
      }
    },
  }  
})
