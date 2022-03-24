import axiosInstance from './config'

export const getData = () => axiosInstance.get(`/data`)

interface body {
  name: string
  mail: string
  message: string
}
export const sendMail = async (body: body) => axiosInstance.post('/sendmail', body)
