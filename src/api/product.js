import apiUrl from '../apiConfig'
import axios from 'axios'

// create 

// read all 
export const getAllProducts = () => {
  return axios.get(apiUrl + "/products")
}

// read single
export const getASingleProduct = (id) => {
  return axios.get(apiUrl + `/products/${id}`)
}

// update 

// delete 