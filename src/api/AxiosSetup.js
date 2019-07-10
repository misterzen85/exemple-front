import Setup from './Setup'
import axios from 'axios'
// import router from '@/router'

var axiosApi = axios.create({
  baseURL: Setup.api,
  timeout: 100000
})

export default axiosApi
