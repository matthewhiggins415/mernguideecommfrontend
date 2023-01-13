import React from 'react'
import { CartScreenContainer, CartItemsContainer } from '../styles/screens/CartScreen.styles'

import CartItem from '../components/CartItem'

import { useContext } from 'react'
import { CartContext } from '../CartContext'

import { checkout } from '../api/stripe'

const CartScreen = ({ notify }) => {
  const cart = useContext(CartContext)
  console.log(cart.items)

  const handleCheckout = (cart) => {
    checkout(cart)
  }

  return (
   <CartScreenContainer>
     <h1>Order Summary</h1>
     <CartItemsContainer>
       {cart.items.map((cartItem) => (
         <CartItem data={cartItem} key={cartItem.id}/>
       ))}
     </CartItemsContainer>
     <div>
       <button onClick={() => handleCheckout(cart.items)}>checkout</button>
     </div>
   </CartScreenContainer>
  )
}

export default CartScreen