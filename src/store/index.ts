import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import * as authApi from '../api/auth';
import getters from './getters'

export interface State {
  user: Partial<User>;
  loginStatus: boolean;
  oneDayConsumePoints: number;
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: {},
    loginStatus: false,
    oneDayConsumePoints: 0,
  },
  getters,
  mutations: {
    COMMIT_USER(state, data: User) {
      state.user = data
    },
    COMMIT_LOGIN_STATUS(state, data: boolean) {
      state.loginStatus = data
    },
    commit_oneDayConsumePoints(state, data: number) {
      state.oneDayConsumePoints = data
    }
  },
  actions: {
    async setUser({commit}) {
      const { data } = await authApi.getUser()
      commit('COMMIT_USER', data)
      commit('COMMIT_LOGIN_STATUS', true)
      return data
    },
    async checkLogin({commit}) {
      const { data } = await authApi.getUserDefault()
      commit('COMMIT_USER', data.data)
      commit('COMMIT_LOGIN_STATUS', true)
      return data
    },
    async logout({commit}) {
      await authApi.logout()
      commit('COMMIT_USER', {})
      commit('COMMIT_LOGIN_STATUS', false)
    }
  },
})

export function useStore () {
  return baseUseStore(key)
}