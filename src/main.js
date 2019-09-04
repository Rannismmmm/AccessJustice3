import '@babel/polyfill'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  created () {
    this.$vuetify.theme.light

  },
  render: h => h(App)
}).$mount('#app')
