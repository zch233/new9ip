import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import * as authApi from '../api/auth';
import getters from './getters'
import * as pointApi from '../api/point';

export interface State {
  user: Partial<User>;
  loginStatus: boolean;
  oneDayConsumePoints: number;
  userPoints: number;
}

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  strict: import.meta.env.MODE !== 'production',
  state: {
    user: {},
    loginStatus: false,
    oneDayConsumePoints: 0,
    userPoints: 0,
  },
  getters,
  mutations: {
    COMMIT_USER(state, data: User) {
      state.user = data
    },
    COMMIT_LOGIN_STATUS(state, data: boolean) {
      state.loginStatus = data
    },
    COMMIT_oneDayConsumePoints(state, data: number) {
      state.oneDayConsumePoints = data
    },
    COMMIT_USER_POINTS(state, data: number) {
      state.userPoints = data
    },
    COMMIT_consumePointsByPreorder(state) {
      state.userPoints = state.userPoints - state.oneDayConsumePoints
    },
  },
  actions: {
    async setUser({commit}) {
      const { data } = await authApi.getUser()
      commit('COMMIT_USER', data)
      commit('COMMIT_LOGIN_STATUS', true)
      return data
    },
    async setOneDayConsumePoints({commit}) {
      const { data } = await pointApi.getOneDayConsumePoints()
      commit('COMMIT_oneDayConsumePoints', data?.credit || 0)
    },
    async setUserPoints({commit}) {
      const {data} = await pointApi.getRestPoints()
      commit('COMMIT_USER_POINTS', data?.surplusCredit || 0)
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
      commit('COMMIT_USER_POINTS', 0)
    }
  },
})

export function useStore () {
  return baseUseStore(key)
}