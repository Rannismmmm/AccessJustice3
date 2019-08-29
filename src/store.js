import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import * as Vue2Leaflet from 'vue2-leaflet'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

Vue.use(Vuex);
Vue.use(Chartkick.use(Chart));
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  }
});
