import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import ticket from './modules/ticket'
import auth from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    auth,
    user,
    ticket
  }
})
