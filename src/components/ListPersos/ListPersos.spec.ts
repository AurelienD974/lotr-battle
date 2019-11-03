import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ListPersos from './ListPersos.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const $store = new Vuex.Store({
  modules: {
    persos: {
      namespaced: true,
      state: {
        persos: [{ id: 1, name: 'Flash', traits: 'Human.Hero.speed', health: 1, attack:5, done: false, editing: false }],
      },
      getters: {
        done: () => {
          return [{ id: 1,  name: 'Flash', traits: 'Human.Hero.speed', health: 1, attack:5, done: false, editing: false }];
        },
      },
    },
  },
});
const wrapper = shallowMount(ListPersos, { mocks: { $store } });

describe('ListPersos', () => {
  it('should show all persos', () => {
    
  });
});
