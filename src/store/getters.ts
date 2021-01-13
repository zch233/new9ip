import { State } from '/@/store/index';

const getters = {
  user: (state: State) => state.user,
  hasVip: (state: State) => state.user.hasVip,
  loginStatus: (state: State) => state.loginStatus,
  oneDayConsumePoints: (state: State) => state.oneDayConsumePoints,
  userPoints: (state: State) => state.userPoints,
}

export default getters
