import React from 'react'
import { ProductContainer, Image } from '../styles/components/Product.styles'

const Product = ({ data }) => {
  return (
    <ProductContainer to={`/product/${data._id}`}>
      <Image src={data.imageOne} alt={"image of product " + data.name}/>
      <h1>{data.name}</h1>
      <h3>{"$" + data.price}</h3>
    </ProductContainer>
  )
}

export default Product