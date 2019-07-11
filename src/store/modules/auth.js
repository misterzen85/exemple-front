import * as types from '../mutation-types'
import ApiAuth from '@/api/Auth'
import axios from '@/api/AxiosSetup'

const state = {
  token: null,
  user: null
}

const getters = {
  logged: state => state.user !== null,
  user: state => state.user,
  token: state => state.token
}

const actions = {
  login ({commit, dispatch}, {credentials}) {
    return ApiAuth.login(credentials).then((resp) => {
      commit(types.AUTH_SET_USER, resp.data.data.user)
      commit(types.AUTH_SET_TOKEN, `Bearer ${resp.data.data.token}`)
      return resp
    }, (resp) => {
      throw resp
    })
  },

  logout ({commit, dispatch}) {
    return ApiAuth.logout().then((resp) => {
      commit(types.AUTH_SET_USER, null)
      commit(types.AUTH_SET_TOKEN, null)
      return resp
    }, (resp) => {
      throw resp
    })
  },

  setToken ({commit, dispatch}, token) {
    commit(types.AUTH_SET_TOKEN, `Bearer ${token}`)
  },

  refresh ({commit, dispatch}) {
    return ApiAuth.refresh().then((resp) => {
      commit(types.AUTH_SET_TOKEN, `Bearer ${resp.data.data.token}`)
      return resp
    })
  },

  rememberMe ({commit, dispatch}) {
    var token = localStorage.getItem('token')
    commit(types.AUTH_SET_TOKEN, token)

    return ApiAuth.profile().then((resp) => {
      commit(types.AUTH_SET_USER, resp.data.data.user)
      return resp
    }, (resp) => {
      dispatch('logout')
      throw resp
    })
  }
}

const mutations = {
  [types.AUTH_SET_USER] (state, user) {
    state.user = user
  },

  [types.AUTH_SET_TOKEN] (state, bearerToken) {
    state.token = bearerToken
    axios.defaults.headers.authorization = bearerToken
    bearerToken !== null ? localStorage.setItem('token', bearerToken) : localStorage.removeItem('token', bearerToken)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
