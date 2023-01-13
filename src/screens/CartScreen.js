import React from 'react'
import { CartScreenContainer, CartItemsContainer } from '../styles/screens/CartScreen.styles'

import CartItem from '../components/CartItem'

import { useContext } from 'react'
import { CartContext } from '../CartContext'

const CartScreen = ({ notify }) => {
  const cart = useContext(CartContext)
  console.log(cart.items)
  return (
   <CartScreenContainer>
     <h1>Order Summary</h1>
     <CartItemsContainer>
       {cart.items.map((cartItem) => (
         <CartItem data={cartItem} key={cartItem.id}/>
       ))}
     </CartItemsContainer>
     <div></div>
   </CartScreenContainer>
  )
}

export default CartScreen