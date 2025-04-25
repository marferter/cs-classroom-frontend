// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "nuxt-directus",
  ],

  // directus: {
  //   url: "https://csclassroom-backend.hidora.com/",
  //   autoRefresh: true,
  // },

  runtimeConfig: {
    public: {
      directus: {
        url: "https://csclassroom-backend.hidora.com",
        autoRefresh: true,
      },
    },
  },

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  vite: {
    /* options for vite */
    // ssr: true // enable unstable server-side rendering for development (false by default)
    // experimentWarning: false // hide experimental warning message (disabled by default for tests)
    vue: {
      /* options for vite-plugin-vue2 */
    },
    server: {
      allowedHosts: true,
      host: true,
      port: 3000,
    },
  },

  routeRules: {
    "/api/**": { cors: true },
  },
  compatibilityDate: "2024-11-27",
});
