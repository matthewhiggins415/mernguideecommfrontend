import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getASingleProduct } from '../api/product'

//implement cart 
import { useContext } from 'react'
import { CartContext } from '../CartContext'

//import styles 
import { ScreenContainer, BackBtn, ProductInfoContainer, LargeImg, SmallImgContainer, SmallImg, Name, Description, Price, AddToCart } from '../styles/screens/ProductScreen.styles'

const ProductScreen = () => {
  const [largeImageSrc, setLargeImageSrc] = useState('')
  const [product, setProduct] = useState({})
  let { id } = useParams()

  //access the cart 
  let cart = useContext(CartContext)
  console.log("cart from product details screen:", cart)

  useEffect(() => {
    const fetchProduct = async (id) => {
      let response = await getASingleProduct(id)
      console.log(response)
      setProduct(response.data.product)
      setLargeImageSrc(response.data.product.imageOne)
    }

    fetchProduct(id)
  }, [])

  const handleImageChange = (src) => {
    setLargeImageSrc(src)
  }

  const handleAddToCart = (id, price) => {
    cart.addOneToCart(id, price)
  }

  return (
    <ScreenContainer>
      <BackBtn to="/">back</BackBtn>
      <ProductInfoContainer>
        <LargeImg src={largeImageSrc}/>
        <SmallImgContainer>
          <SmallImg onClick={() => {handleImageChange(product.imageOne)}} src={product.imageOne} />
          <SmallImg onClick={() => {handleImageChange(product.imageTwo)}} src={product.imageTwo} />
          <SmallImg onClick={() => {handleImageChange(product.imageThree)}} src={product.imageThree} />
          <SmallImg onClick={() => {handleImageChange(product.imageFour)}} src={product.imageFour} />
        </SmallImgContainer>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        <Price>{"$" + product.price}</Price>
        <AddToCart onClick={() => {handleAddToCart(product._id, product.price)}}>add to cart</AddToCart>
      </ProductInfoContainer>
    </ScreenContainer>
  )
}

export default ProductScreen