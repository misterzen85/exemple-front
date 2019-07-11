import Setup from './Setup'
import axios from 'axios'
import store from '@/store'
// import router from '@/router'

var axiosApi = axios.create({
  baseURL: Setup.api,
  timeout: 100000
})

axiosApi.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    store.dispatch('auth/refresh').then((resp) => {
      error.response.config.headers.authorization = resp.headers.authorization
      return axiosApi.request(error.response.config)
    }, (error) => {
      return Promise.reject(error)
    })
  } else {
    return Promise.reject(error)
  }
})

export default axiosApi
