import React from 'react'
import { CartScreenContainer, CartItemsContainer, CheckoutBtn, EmptyCartContainer} from '../styles/screens/CartScreen.styles'

import CartItem from '../components/CartItem'

import { useContext } from 'react'
import { CartContext } from '../CartContext'

import { checkout } from '../api/stripe'


const ActiveCart = ({ cart, handleCheckout}) => {
  return (
    <>
    <h1>Order Summary</h1>
    <CartItemsContainer>
      {cart.items.map((cartItem) => (
        <CartItem data={cartItem} key={cartItem.id}/>
      ))}
    </CartItemsContainer>
    <CheckoutBtn onClick={() => handleCheckout(cart.items)}>checkout</CheckoutBtn>
    </>
  )
}



const CartScreen = ({ notify }) => {
  const cart = useContext(CartContext)
  console.log(cart.items)

  const handleCheckout = (cart) => {
    checkout(cart)
  }

  return (
   <CartScreenContainer>
    { cart.items.length > 0 ? <ActiveCart cart={cart} handleCheckout={handleCheckout}/> : <EmptyCartContainer>
      <h3>cart empty</h3>
    </EmptyCartContainer>}
   </CartScreenContainer>
  )
}

export default CartScreen