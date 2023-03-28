import axios from 'axios'
import { isHTML } from '@/shared/utils'

const axiosInstance = axios.create({
  // baseURL: '/'
})

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export const getErrorAPI = (error, errorMessage = '') => (error.data && !isHTML(error.data) ? error.data : errorMessage)

export default axiosInstance
