import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import * as authApi from '../api/auth';

export interface State {
  user: Partial<User>,
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: {}
  },
  mutations: {
    COMMIT_USER(state, data: User) {
      state.user = data
    }
  },
  actions: {
    async setUser({commit}) {
      const user = await authApi.getUser()
      commit('COMMIT_USER', user.data)
      return user.data
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}