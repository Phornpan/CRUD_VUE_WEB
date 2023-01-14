export const state = () => {
  return {
    tabMenu: false,
    menu: null,
    subMenu: null,
    exportDataConfig: true,
    userInfo: {
      userID: null,
      userRoleID: null,
      employeeId: null,
      employeeCode: null,
      username: null,
      name: null,
      surname: null,
      email: null,
      positionCode: null,
      positionName: null,
      token: null,
      phoneNo: null,
    },
    SwitchActiveColor: '#3CB371',
    SwitchInactiveColor: '#6C757D',
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.userInfo = user || null
    localStorage.setItem('userInfo', JSON.stringify(user))
  },
  UPDATE_AUTH_TOKEN(state, token) {
    state.userInfo.token = token
  },
  LOGOUT(state) {
    state.userInfo = {}
    localStorage.removeItem('userInfo')
  },
  SET_MENU(state, head) {
    state.menu = head
  },
  SET_SUBMENU(state, sub) {
    state.subMenu = sub
  },
  SET_TABMENU(state, tabMenu) {
    state.tabMenu = tabMenu
  },
}

export const getters = {
  getExportDataConfig(state) {
    return state.exportDataConfig
  },
  token(state) {
    return state.userInfo.token
  },
  userInfo(state) {
    return state.userInfo
  },
  getheadmenu(state) {
    return state.menu
  },
  getsubheadmenu(state) {
    return state.subMenu
  },
  getSwitchActiveColor(state) {
    return state.SwitchActiveColor
  },
  getSwitchInactiveColor(state) {
    return state.SwitchInactiveColor
  },
}

export const actions = {
  nuxtClientInit(store, context) {
    var userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      var userInfo = JSON.parse(userInfo)
      if (userInfo.token) {
        store.commit('SET_USER', userInfo)
      }
    }
  },
}
