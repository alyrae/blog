import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout'

Vue.use(Vuex);

export interface IRootState {
  test: string
}

export default new Vuex.Store<IRootState>({
  state: {
    test: '',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    layout,
  },
});
