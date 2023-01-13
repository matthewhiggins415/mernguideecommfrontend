import axios from 'axios'
import apiUrl from '../apiConfig'

export const checkout = async (cart) => {
  let response = await axios.post(apiUrl + '/checkout', {
    cart
  }, {
    'Content-Type': 'application/json'
  })

  console.log(response)
}