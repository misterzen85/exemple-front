import axios from '@/api/AxiosSetup'

export default {
  base: '/auth',

  login (credentials) {
    return axios.post(`${this.base}/login`, credentials)
  },

  logout (req) {
    return axios.get(`${this.base}/logout`)
  },

  profile () {
    return axios.get(`${this.base}/profile`)
  },

  refresh () {
    return axios.post(`${this.base}/refresh`)
  }
}
