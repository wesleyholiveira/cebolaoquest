import colors from 'vuetify/es5/util/colors'

export default {
  dev: process.env.NODE_ENV !== 'production',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.DNS
  },

  env: {
    baseURL: process.env.BASE_URL,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cebolão Quest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/tiptap-vuetify.js', mode: 'client' },
    { src: '~/plugins/dice-roller.js', mode: 'client' },
    { src: '~/plugins/webgl.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    'nuxt-socket-io',
    '~/modules/api'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-br',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  recaptcha: {
    language: 'pt-br',
    siteKey: process.env.RECAPTCHA_SITEKEY,
    version: 'v2'
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify', 'threejs-dice', 'rpg-dice-roller'],
    // parallel: true,
    cache: true,
    // hardSource: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    minimize: true,
    minimizer: [
      'terser-webpack-plugin',
      'optimize-css-assets-webpack-plugin',
    ],
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    }
  },

  axios: {
    baseUrl: process.env.BASE_URL
  },

  serverMiddleware: [
    // { path: '/', handler: '~/server-middleware/index.js' },
    // { path: '/api', handler: '~/server-middleware/api.js' },
    // { path: '/websocket', handler: '~/server-middleware/websocket.js' }
  ],

  io: {
    sockets: [{
      name: 'main',
      url: process.env.BASE_URL,
    }]
  },

  auth: {
    baseUrl: process.env.BASE_URL,
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: false,
        endpoints: {
          user: { url: '/api/user' },
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/logout', method: 'post' }
        }
      }
    }
  }
}
