import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import localStoragePlugin from '@/store/plugins/localStorage.ts';
import persos from '@/store/modules/persos.ts'

Vue.use(Vuex);
Vue.use(VueAxios, axios)


export default new Vuex.Store({
  state: {
    persos: []
  },
  mutations: {
    SET_PERSOS (state, persos) {
      state.persos = persos
    }
  },
  actions: {
    loadPersos ( { commit }){
      axios
      .get('https://ringsdb.com/api/public/cards/')
      .then(result => result.data)
      .then(persos => {
        console.log(persos)

        commit('SET_PERSOS', persos)
        })
        .catch((error => {
          console.log(error)
      }))
      

    }
  },
  modules: {
    persos,
  },
  plugins: [localStoragePlugin],
});
