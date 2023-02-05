import React, { useState } from 'react'
import { Container, Modal, ModalHeader, Form, Input, CloseBtn, SubmitBtn } from '../styles/components/EditProductModal.styles'
import { updateAProduct } from '../api/product'

const EditProductModal = ({ user, setSelectedProduct, selectedProduct, showModal, setShowModal, setProducts }) => {
  const { imageOne, imageTwo, imageThree, imageFour, name, description, price } = selectedProduct

  const [formData, setFormData] = useState({
    imageOne: imageOne, 
    imageTwo: imageTwo,
    imageThree: imageThree,
    imageFour: imageFour,
    name: name,
    description: description, 
    price: price
  })

  const clearForm = () => {
    setFormData({
      imageOne: '', 
      imageTwo: '',
      imageThree: '',
      imageFour: '',
      name: '',
      description: '', 
      price: ''
    })
  }

  const handleModal = () => {
    setSelectedProduct({})
    setShowModal(false)
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let product = {
      imageOne: formData.imageOne,
      imageTwo: formData.imageTwo,
      imageThree: formData.imageThree,
      imageFour: formData.imageFour,
      name: formData.name,
      description: formData.description,
      price: formData.price
    }

    let response = await updateAProduct(user, selectedProduct._id, product)
    setProducts(response.data.products)
    clearForm()
    handleModal()
  }

  return (
    <Container showModal={showModal}>
      <Modal>
        <ModalHeader>
          <h2>Edit Product</h2>
          <CloseBtn onClick={handleModal}>&#10005;</CloseBtn>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
           <Input 
             type="text" 
             name="imageOne" 
             value={formData.imageOne} 
             placeholder={imageOne} 
             onChange={onChange}
           />
           <Input 
            type="text" 
            name="imageTwo" 
            value={formData.imageTwo} 
            placeholder={imageTwo} 
            onChange={onChange}
           />
           <Input 
             type="text"  
             name="imageThree" 
             value={formData.imageThree} 
             placeholder={imageThree} 
             onChange={onChange}
            />
           <Input 
             type="text" 
             name="imageFour" 
             value={formData.imageFour} 
             placeholder={imageFour} 
             onChange={onChange}
           />
           <Input 
             type="text"  
             name="name" 
             value={formData.name} 
             placeholder={name} 
             onChange={onChange}
            />
           <Input 
             type="text" 
             name="description" 
             value={formData.description} 
             placeholder={description} 
             onChange={onChange}
            />
           <Input 
             type="number"  
             name="price" 
             value={formData.price} 
             placeholder={price} 
             onChange={onChange}
            />
           <SubmitBtn type="submit">submit</SubmitBtn> 
        </Form>
      </Modal>
    </Container>
  )
}

export default EditProductModal