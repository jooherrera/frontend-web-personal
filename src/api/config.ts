import axios from 'axios'

const URL = process.env.REACT_APP_API

const axiosInstance = axios.create({
  baseURL: URL,
})

export default axiosInstance
