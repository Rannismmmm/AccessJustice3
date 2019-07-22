import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    url: "http://118.138.74.5:8080/",
  },
  mutations: {
    setCards(state, payload){
      state.cards = payload;
    }
  },
  actions: {}
});
