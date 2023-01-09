import React from 'react'
import { CartScreenContainer } from '../styles/screens/CartScreen.styles'

//implement cart 
import { useContext } from 'react'
import { CartContext } from '../CartContext'

const CartScreen = () => {

  const cart = useContext(CartContext)
  console.log(cart.items)

  return (
   <CartScreenContainer>
     <h1>Order Summary</h1>
     <div></div>
     <div></div>
   </CartScreenContainer>
  )
}

export default CartScreen