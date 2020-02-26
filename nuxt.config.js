
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Learn to play Go',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The best interactive way to learn the game of Go/Baduk/Weiqi. Rules, basic principles, and more...' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],
  styleResources: {
    sass: [
      '@/assets/main.sass'
    ]
  },
  webfontloader: {
    google: {
      families: [
        'Roboto:400,700',
        'Open+Sans:400,700'
      ]
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
