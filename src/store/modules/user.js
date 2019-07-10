import ApiUser from '@/api/User'
import * as types from '../mutation-types'
// import Vue from 'vue'

// CONSTANTES

// STATE
const state = {
  users: []
}

// GETTERS
const getters = {
  users: state => state.users
}

// ACTIONS
const actions = {
  // On récupère la liste des utilisateurs
  fetchUsers ({state, commit, dispatch}) {
    ApiUser.allUsers().then((response) => {
      commit(types.USER_ADD, response.data.data)
    })
  },

  fetchUserById ({state, commit, dispatch}, id) {
    ApiUser.userById(id).then((response) => {
      commit(types.USER_ADD, response.data.data)
    })
  }
}

// MUTATIONS - Permet de modifier l'état des objets du "State"
const mutations = {
  [types.USER_ADD] (state, pUsers) {
    state.users = pUsers
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
