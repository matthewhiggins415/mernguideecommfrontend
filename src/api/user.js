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

//logout
export const signOut = (user) => {
  return axios.delete(apiUrl + '/sign-out', {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}