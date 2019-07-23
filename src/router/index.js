import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/Login'
import TicketList from '@/components/tickets/List'
import TicketCard from '@/components/tickets/Card'
import store from '@/store'

function isLogged () {
  // store.dispatch('auth/rememberMe')
  return store.getters['auth/logged']
}

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/user/login',
      name: 'login',
      component: Login
    },
    {
      path: '/tickets/list',
      name: 'tickets-list',
      component: TicketList
    },
    {
      path: '/tickets/:ticketid',
      name: 'tickets-card',
      component: TicketCard
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && isLogged()) {
    next(false)
    return
  }
  if (to.name !== 'login' && !isLogged()) {
    var token = localStorage.getItem('token')
    if (token !== null && token !== '') {
      store.dispatch('auth/rememberMe').then(() => {
        next()
      }, () => {
        next({ name: 'login' })
      })
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
