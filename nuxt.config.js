const fs = require('node:fs');
// import data from /store/index.js
const { state } = require('./store/index.js');

export default {

  router: {
    extendRoutes(routes, resolve) {
      var projects = state().projects
      Object.keys(projects).forEach((project) => {
        routes.push({
          name: project,
          path: '/project/' + project,
        })
      })

      // make a set of tags
      let tags = new Set()
      // for each project, add tags to the set
      Object.keys(projects).forEach((project) => {
        projects[project].tags.forEach((tag) => {
          tags.add(tag)
        })
      })

      // for each tag, add a route
      tags.forEach((tag) => {
        routes.push({
          name: tag,
          path: '/tag/' + tag,
        })
      })

    }

  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dylan Kainth',
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
      {
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css',
        rel: 'stylesheet',
        integrity:
          'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor',
        crossorigin: 'anonymous',
      },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2',
        crossorigin: 'anonymous',
      },
    ]
  },


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    /* '@nuxt/image', if static */
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxt/image'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  markdownit: {
    runtime: true, // Support `$md()`
    html: true
  },
  image: {
    // Options
  },
  plugins: [{
    src: '~/plugins/gtag.js'
  }, { src: '~/plugins/fontawesome.js' }],

  // Modify nuxt.config.js adding to the `css` and `plugins` sections.
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],


  ssr: false

}
