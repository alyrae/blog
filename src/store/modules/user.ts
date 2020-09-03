import { IRootState } from './../index';
import { Module } from 'vuex';
export interface IUserInfo {
  nickname?: string
  telephone?: string
  avatar?: string
}

export interface IUserState {
  userInfo: IUserInfo
}

export interface ILoginPayload {
  loginName: string
  password: string
}

export interface ISignupPayload {
  signupName: string
  tel: string
  password: string
}

const state: IUserState = {
  userInfo: {

  },
}

const UserModule: Module<IUserState, IRootState> = {
  state,
  getters: {
    isLogin({userInfo}): boolean {
      return !!Object.keys(userInfo).length
    },
  },
  mutations: {
    login(state, payload: IUserInfo) {
      state.userInfo = payload
    },
    logout(state) {
      state.userInfo = {}
    },
  },
  actions: {
    async login({commit}, payload: ILoginPayload) {
      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
            // reject()
          }, 200)
        })
        const res: IUserInfo = {
          nickname: 'test',
          telephone: '1234567891ab',
          avatar: 'https://images.daqinjia.cn/wen/5b8aed18-e2d9-11ea-bb0a-00e18c22a005.png',
        }
        commit('login', res)
        return true
      } catch {
        return false
      }
    },
    async signup({commit}, payload: ISignupPayload) {
      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
            // reject()
          }, 200)
        })
        const res: IUserInfo = {
          nickname: 'test',
          telephone: '1234567891ab',
          avatar: 'https://images.daqinjia.cn/wen/5b8aed18-e2d9-11ea-bb0a-00e18c22a005.png',
        }
        commit('login', res)
        return true
      } catch {
        return false
      }
    },
  },
}

export default UserModule
