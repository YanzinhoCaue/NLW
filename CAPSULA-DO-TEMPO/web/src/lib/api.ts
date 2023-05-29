import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.20.4.189:3333',
})
