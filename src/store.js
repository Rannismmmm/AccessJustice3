import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [],
    url: "http://118.138.68.140:8080/",
  },
  mutations: {
    setCards(state, payload){
      state.cards = payload;
    }
  },
  actions: {
    async fetchCards({commit}){
      try {
        let resp = await axios.get('http://118.138.68.140:8090/RevisionHero2/webresources/entity.course')
        commit('setCards', resp.data)
      } catch (e) {
        commit('setCards', [])
      }
    }

  }
});
