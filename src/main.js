import '@babel/polyfill'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCHXxvk8k_7YZ-RK9GRXvrOpuhsw8DPc1M',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
})

new Vue({
  vuetify,
  router,
  store,
  created () {
    this.$vuetify.theme.dark

  },
  VueGoogleMaps,
  render: h => h(App)
}).$mount('#app')
