import React from 'react'
import { CartItemContainer, LeftContainer, Img, RightContainer, QuantityContainer, QuantityBtn, RemoveBtn } from '../styles/components/CartItem.styles'

const CartItem = ({ data }) => {
  return (
    <CartItemContainer>
      <LeftContainer>
        <Img src={data.src} />
        <h1>{data.name}</h1>
      </LeftContainer>
      <RightContainer>
        <QuantityContainer>
          <QuantityBtn>-</QuantityBtn>
          <h2>{data.quantity}</h2>
          <QuantityBtn>+</QuantityBtn>
        </QuantityContainer>
        <h2>{data.price}</h2>
        <RemoveBtn>X</RemoveBtn>
      </RightContainer>
    </CartItemContainer>
  )
}

export default CartItem