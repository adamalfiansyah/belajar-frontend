export default {
  ssr: false,
  loading: false,
  target: 'static',

  server: {
    host: '0.0.0.0',
    port: 3200
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'belajar-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  i18n: {
    langDir: 'lang/',
    defaultLocale: 'id',
    locales: [ 
      { code: 'id', iso: 'id-ID', file: 'id.json' }
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    prefix  : process.env.API_URL,
    proxy   : true
  },

  proxy: {
    '/api/': { target: process.env.API_URL, pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
