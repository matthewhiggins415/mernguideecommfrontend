import React from 'react'
import { InfoContainer, Img, Container, BtnContainer, Btn, DeleteBtn } from '../styles/components/AdminProduct.styles'
import { deleteAProduct } from '../api/product'

const AdminProduct = ({ setProducts, user, product }) => {

  const handleDelete = async (user, id) => {
    let response = await deleteAProduct(user, id)
    console.log(response)
    setProducts(response.data.products)
  }
  return (
    <Container>
      <InfoContainer>
        <Img src={product.imageOne} alt="image of product"/>
        <h3>{product.name}</h3>
      </InfoContainer>
      <BtnContainer>
        <Btn>edit</Btn>
        <DeleteBtn onClick={() => handleDelete(user, product._id)}>x</DeleteBtn>
      </BtnContainer>
    </Container>
  )
}

export default AdminProduct