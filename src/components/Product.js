import React from 'react'
import { ProductContainer } from '../styles/components/Product.styles'

const Product = ({ data }) => {
  return (
    <ProductContainer to={`/product/${data._id}`}>
      <img src={data.imageOne}/>
      <h1>{data.name}</h1>
      <p>{"$" + `${data.price}`}</p>
    </ProductContainer>
  )
}

export default Product