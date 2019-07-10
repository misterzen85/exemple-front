// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {ClientTable, Event} from 'vue-tables-2'
import App from './App'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

import './assets/metro.css'
import './assets/hover.css'
import './assets/animated-fontawesome.min.css'

Vue.use(ClientTable, {}, false)
Vue.use(Event)
Vue.use(Notifications)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'

import './assets/materia.css'

// Moment
import MomentPlugin from '@/plugin/moment'
Vue.use(MomentPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
