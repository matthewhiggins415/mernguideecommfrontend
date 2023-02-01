import apiUrl from '../apiConfig'
import axios from 'axios'

//login call 
export const loginUser = (formData) => {
  const { email, password } = formData
  return axios.post(apiUrl + '/login', {
    credentials: {
      email, 
      password
    }
  })
}