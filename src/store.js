import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import * as Vue2Leaflet from 'vue2-leaflet'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import am4themes_dark from '@amcharts/amcharts4/themes/dark'

Vue.use(Vuex)
Vue.use(Chartkick.use(Chart))
am4core.useTheme(am4themes_animated)
am4core.useTheme(am4themes_dark)

export default new Vuex.Store({
  state: {
    breads: [
      {
        text: 'Justicely',
        disabled: true,
        to: '/'
      }
    ]
  },
  mutations: {
    switchView: (state, redirectionItem) => {
      if (redirectionItem.to == '/') {
        state.breads = [
          {
            text: 'Justicely',
            disabled: true,
            to: '/'
          }
        ]
      } else {
        state.breads = [
          {
            text: 'Justicely',
            disabled: false,
            to: '/'
          }
        ]
        state.breads.push(redirectionItem)
      }
    },

    spliceRests: (state, redirectionItem) => {
      let index = state.breads.indexOf(redirectionItem)
      state.breads.splice((index + 1), (state.breads.length - index - 1))
    },

    addView: (state, redirectionItem) => {
      let lastItem = state.breads.pop()
      state.breads.push({
        text: lastItem.text,
        disabled: false,
        to: lastItem.to
      })
      state.breads.push(redirectionItem)

    }

  },
  actions: {
    getBreads: state => {
      return state.breads
    }
  }
})
