const config = require('./config')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Test_SEC_P Web',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/nuxt-client-init.js',
    '~/plugins/axios',
    '~/plugins/api',
    '~/plugins/util',
    '~/plugins/element-ui',
    '~/plugins/fontawesome.js',
    '~/plugins/vue-sweetalert2',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  bootstrapVue: {
    icons: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: config.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
      }
    },
    babel: {
      compact: true,
    },
  },

  server: {
    host: config.HOST,
    port: config.PORT,
  },
}
