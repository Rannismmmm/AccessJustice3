import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/lib/util/colors'
import 'vuetify/src/styles/main.sass'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  iconfont: 'mdi',
  options: {
    customProperties: true
  }
})

