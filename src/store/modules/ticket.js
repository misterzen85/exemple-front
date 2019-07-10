import ApiTicket from '@/api/Ticket'
import * as types from '../mutation-types'
// import Vue from 'vue'

// CONSTANTES

// STATE
const state = {
  tickets: []
}

// GETTERS
const getters = {
  tickets: state => state.tickets
}

// ACTIONS
const actions = {
  // On récupère la liste des tickets
  fetchTickets ({state, commit, dispatch}) {
    ApiTicket.allTickets().then((response) => {
      commit(types.TICKET_ADD, response.data.data)
    })
  },
  fetchTicketById ({state, commit, dispatch}, id) {
    ApiTicket.ticketByID(id).then((response) => {
      commit(types.TICKET_ADD, response.data.data)
    })
  },
  saveTicket ({state, commit, dispatch}, req) {
    ApiTicket.saveTicket(req).then((response) => {
      commit(types.TICKET_ADD, response.data.data)
    })
  }
}

// MUTATIONS - Permet de modifier l'état des objets du "State"
const mutations = {
  [types.TICKET_ADD] (state, pTickets) {
    state.tickets = pTickets
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
