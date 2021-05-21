import colors from 'vuetify/es5/util/colors'

console.log(process.env.BASE_URL)
export default {
  dev: process.env.NODE_ENV !== 'production',
  server: {
    port: 3000,
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
    { src: '~/plugins/tiptap-vuetify.js', mode: 'client' }
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
    '@nuxtjs/pwa',
    // '~/modules/api'
    'nuxt-socket-io'
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

  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify'],
    parallel: true,
    cache: true,
    // hardSource: true,
  },

  axios: {
    baseUrl: process.env.BASE_URL
  },

  serverMiddleware: [
    { path: '/', handler: '~/server-middleware/index.js' },
    { path: '/api', handler: '~/server-middleware/api.js' },
    // { path: '/websocket', handler: '~/server-middleware/websocket.js' }
  ],

  io: {
    sockets: [{
      name: 'main',
      url: process.env.BASE_URL,
      namespaces: {
        '/index': {
          emitters: ['getMessage2 + testMsg --> message2Rxd'],
          listeners: ['chatMessage2', 'chatMessage3 --> message3Rxd']
        },
      }
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
        user: {
          autoFetch: false
        },
        endpoints: {
          user: { url: '/api/user' },
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/logout', method: 'post' }
        }
      }
    }
  }
}
