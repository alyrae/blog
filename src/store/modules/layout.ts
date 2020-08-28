import {Module} from 'vuex'
import {IRootState} from '../index'

export type mode = 'white' | 'gray'

export interface ILayoutState {
  sm: number
  md: number
  lg: number
  xl: number
  mode: mode // 背景色
}

// header-nav的布局
const state: ILayoutState = {
  sm: 6,
  md: 6,
  lg: 5,
  xl: 4,
  mode: 'white',
}

const LayoutModule: Module<ILayoutState, IRootState> = {
  state,
  getters: {
    bg(state) {
      const mode = state.mode
      switch (mode) {
        case 'white':
          return '#fff'
        case 'gray':
          return '#f9f9f9'
        default:
          return '#fff'
      }
    },
  },
  mutations: {
    changeMode(state, payload: mode) {
      state.mode = payload
    },
  },
  actions: {
    // mutation中获取不到getters
    changeMode({commit, getters}, payload: mode) {
      commit('changeMode', payload)
      document.body.style.background = getters.bg
    },
  },
}

export default LayoutModule
