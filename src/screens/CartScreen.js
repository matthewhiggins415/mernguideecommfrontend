import React from 'react'
import { CartScreenContainer } from '../styles/screens/CartScreen.styles'

import CartItem from '../components/CartItem'

import { useContext } from 'react'
import { CartContext } from '../CartContext'
const CartScreen = () => {
  const cart = useContext(CartContext)
  console.log(cart.items)
  return (
   <CartScreenContainer>
     <h1>Order Summary</h1>
     <div>
       {cart.items.map((cartItem) => (
         <CartItem data={cartItem}/>
       ))}
     </div>
     <div></div>
   </CartScreenContainer>
  )
}

export default CartScreen