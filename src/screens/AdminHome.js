import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { getAllProducts } from '../api/product'
import AdminProduct from '../components/AdminProduct'
import { Container, Header, Btn } from '../styles/screens/AdminHome.styles'
import { createProduct } from '../api/product'
import EditProductModal from '../components/EditProductModal'

const AdminHome = ({ user }) => {
  console.log(user)
  const [products, setProducts] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await getAllProducts()
      console.log(response)
      setProducts(response.data.products)
    }

    fetchProducts()
  }, [])

  if (user.admin === false) {
    return <Navigate to="/login" />
  }

  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" />
  } 

  const handleCreateProduct = async (user) => {
    let response = await createProduct(user)
    console.log(response)
    setProducts(response.data.products)
  }

  return (
    <>
    <EditProductModal user={user} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} showModal={showModal} setShowModal={setShowModal} setProducts={setProducts}/>
    <Container>
      <Header>
        <h3>Admin Home</h3>
        <Btn onClick={() => handleCreateProduct(user)}>create</Btn>
      </Header>
      {products.length > 0 ? products.map((product) => (
        <AdminProduct setSelectedProduct={setSelectedProduct} setShowModal={setShowModal} setProducts={setProducts} user={user} product={product} key={product._id}/>
      )) : null}
    </Container>
    </>
  )
}

export default AdminHome