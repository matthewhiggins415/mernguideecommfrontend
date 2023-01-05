import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getASingleProduct } from '../api/product'

//import styles 
import { ScreenContainer, BackBtn, ProductInfoContainer, LargeImg, SmallImgContainer, SmallImg, Name, Description, Price, AddToCart } from '../styles/screens/ProductScreen.styles'

const ProductScreen = () => {
  const [product, setProduct] = useState({})
  let { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchProduct = async (id) => {
      let response = await getASingleProduct(id)
      console.log(response)
      setProduct(response.data.product)
    }

    fetchProduct(id)
  }, [])

  return (
    <ScreenContainer>
      <BackBtn to="/">back</BackBtn>
      <ProductInfoContainer>
        <LargeImg src={product.imageOne}/>
        <SmallImgContainer>
          <SmallImg  src={product.imageOne} />
          <SmallImg  src={product.imageTwo} />
          <SmallImg  src={product.imageThree} />
          <SmallImg  src={product.imageFour} />
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