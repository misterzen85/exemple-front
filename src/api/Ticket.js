import axios from '@/api/AxiosSetup'

export default {
  base: '/ticket',

  allTickets () {
    return axios.get(`${this.base}/allticket`)
  },

  ticketByID (id) {
    return axios.get(`${this.base}/${id}`)
  },

  saveTicket (ticket) {
    return axios.post(`${this.base}/save`, ticket)
  }
}
