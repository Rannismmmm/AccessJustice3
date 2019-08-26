import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import * as Vue2Leaflet from 'vue2-leaflet'

Vue.use(Vuex);
Vue.use(Chartkick.use(Chart));

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  }
});
