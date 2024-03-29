export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    router: {
        base: '/TODO-vue-web-app/'
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'TODO App',
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
        { rel: 'icon', type: 'image/png', href: 'logo.png' }
      ]
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '@/plugins/bootstrap-vue.js',
      '@/plugins/vue-uuid.js',
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
  