import axios from '@/api/AxiosSetup'

export default {
  base: '/user',

  allUsers () {
    return axios.get(`${this.base}/alluser`)
  },

  userById (id) {
    return axios.get(`${this.base}/${id}`)
  }
}
