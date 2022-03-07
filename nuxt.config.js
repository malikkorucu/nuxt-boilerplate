export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-boilerplate",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

    script: [
      {
        src: "/bootstrap.bundle.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/main.scss", lang: "sass" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vue-carousel.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    "@nuxtjs/i18n",
  ],

  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        fr: {
          welcome: "Bienvenue",
        },
        es: {
          welcome: "Bienvenido",
        },
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
