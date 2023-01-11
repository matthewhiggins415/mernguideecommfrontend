import React from 'react'
import { CartItemContainer, LeftContainer, Img, RightContainer, QuantityContainer, QuantityBtn, RemoveBtn } from '../styles/components/CartItem.styles'

import { useContext } from 'react'
import { CartContext } from '../CartContext'

const CartItem = ({ data }) => {

  const cart = useContext(CartContext)

  const handleRemoveItem = (id) => {
    cart.deleteFromCart(id)
  }

  const handleReduceQty = (id) => {
    cart.removeOneFromCart(id)
  }

  const handleIncreaseQty = (id) => {
    cart.addOneToCart(id)
  }

  return (
    <CartItemContainer>
      <LeftContainer>
        <Img src={data.src} />
        <h1>{data.name}</h1>
      </LeftContainer>
      <RightContainer>
        <QuantityContainer>
          <QuantityBtn onClick={() => handleReduceQty(data.id)}>-</QuantityBtn>
          <h2>{data.quantity}</h2>
          <QuantityBtn onClick={() => handleIncreaseQty(data.id)}>+</QuantityBtn>
        </QuantityContainer>
        <h2>{"$" + data.quantity * data.price}</h2>
        <RemoveBtn onClick={() => handleRemoveItem(data.id)}>X</RemoveBtn>
      </RightContainer>
    </CartItemContainer>
  )
}

export default CartItem