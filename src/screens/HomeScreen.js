import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../api/product'

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
    <div>
      <h1>Homescreen</h1>
      <div>
        { products.length > 0 ? 
            products.map((product) => (
              <h1>{product.name}</h1>
            )) 
          : <p>no products</p> }
      </div>
    </div>
  )
}

export default HomeScreen