import React from 'react'
import { InfoContainer, Img, Container, BtnContainer, Btn, DeleteBtn } from '../styles/components/AdminProduct.styles'

const AdminProduct = ({ product }) => {
  return (
    <Container>
      <InfoContainer>
        <Img src={product.imageOne} alt="image of product"/>
        <h3>{product.name}</h3>
      </InfoContainer>
      <BtnContainer>
        <Btn>edit</Btn>
        <DeleteBtn>x</DeleteBtn>
      </BtnContainer>
    </Container>
  )
}

export default AdminProduct