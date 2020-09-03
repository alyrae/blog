import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout'
import user from './modules/user'

Vue.use(Vuex);

export interface IRootState {
  [propName: string]: any
}

export default new Vuex.Store<IRootState>({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    layout,
    user,
  },
});
