import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getASingleProduct } from '../api/product'

//import styles 
import { ScreenContainer, BackBtn, ProductInfoContainer, LargeImg, SmallImgContainer, SmallImg, Name, Description, Price, AddToCart } from '../styles/screens/ProductScreen.styles'

const ProductScreen = () => {
  const [largeImageSrc, setLargeImageSrc] = useState('')
  const [product, setProduct] = useState({})
  let { id } = useParams()
  console.log(id)

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
        <AddToCart>add to cart</AddToCart>
      </ProductInfoContainer>
    </ScreenContainer>
  )
}

export default ProductScreen