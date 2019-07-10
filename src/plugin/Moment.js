import moment from 'moment'

export default {
  install (Vue, options) {
    moment.locale('fr')
    Vue.prototype.$moment = moment
    Vue.moment = moment
  }
}
