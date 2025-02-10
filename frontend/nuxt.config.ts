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
  runtimeConfig: {
    public: {
      STRAPI_URL: process.env.STRAPI_URL || 'http://localhost:1337',
      STRAPI_IMAGE_URL: process.env.STRAPI_IMAGE_URL || 'http://localhost:1337/uploads'
    }
  },
  strapi: {
    // url: 'https://0youri.com/backend',
    url: process.env.STRAPI_URL,
  },
  image: {
    providers: {
      strapi: {
        options: {
          // baseURL: 'https://0youri.com/backend/uploads',
          baseURL: process.env.STRAPI_IMAGE_URL,
        }
      }
    },
  }  
})
