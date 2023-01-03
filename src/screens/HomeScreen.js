import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../api/product'
import Product from '../components/Product'
import { ScreenContainer, ProductContainer } from '../styles/screens/Homescreen.styles'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await getAllProducts()
        setProducts(response.data.products)
      } catch(err) {
        console.log(err)
      }
    }

    fetchProducts()
  }, [])

  return (
    <ScreenContainer>
      <h1>Homescreen</h1>
      <ProductContainer>
        { products.length > 0 ? 
            products.map((product) => (
              <Product data={product}/>
            )) 
          : <p>no products</p> }
      </ProductContainer>
    </ScreenContainer>
  )
}

export default HomeScreen