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


// providers: {
//   myProvider: {
//     name: 'myProvider', // optional value to overrider provider name
//     provider: '~/providers/my-provider.ts', // Path to custom provider
//     options: {
//       // ... provider options
//       baseURL: "https://site.com"
//     }
//   }
// }