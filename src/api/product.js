import apiUrl from '../apiConfig'
import axios from 'axios'

// create 
export const createProduct = (user) => {
  let body = ''
  return axios.post(apiUrl + '/product', body, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// read all 
export const getAllProducts = () => {
  return axios.get(apiUrl + "/products")
}

// read single
export const getASingleProduct = (id) => {
  return axios.get(apiUrl + `/products/${id}`)
}

// update 
export const updateAProduct = (user, id, product) => {
  return axios.patch(apiUrl + `/products/${id}`, product, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// delete 
export const deleteAProduct = (user, id) => {
  return axios.delete(apiUrl + `/products/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}