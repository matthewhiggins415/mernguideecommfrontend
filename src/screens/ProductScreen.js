import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getASingleProduct } from '../api/product'
import ClipLoader from "react-spinners/ClipLoader";

//import cart 
import { useContext } from 'react'
import { CartContext } from '../CartContext'

//import styles 
import { ScreenContainer, BackBtn, ProductInfoContainer, LargeImg, SmallImgContainer, SmallImg, Name, Description, Price, AddToCart } from '../styles/screens/ProductScreen.styles'

const ProductScreen = ({ notify }) => {
  const [largeImageSrc, setLargeImageSrc] = useState('')
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  let { id } = useParams()

  //get the cart 
  const cart = useContext(CartContext)
  console.log(cart)

  useEffect(() => {
    const fetchProduct = async (id) => {
      let response = await getASingleProduct(id)
      console.log(response)
      setProduct(response.data.product)
      setLargeImageSrc(response.data.product.imageOne)
      setLoading(false)
    }

    fetchProduct(id)
  }, [id])

  const handleImageChange = (src) => {
    setLargeImageSrc(src)
  }

  const handleAddToCart = (id, src, price, name) => {
    cart.addOneToCart(id, src, price, name)
    notify('item added', 'success')
  }

  return (
    <ScreenContainer>
      <BackBtn to="/">back</BackBtn>
      { loading === false ? <ProductInfoContainer>
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
        <AddToCart onClick={() => {handleAddToCart(product._id, product.imageOne, product.price, product.name)}}>add to cart</AddToCart>
      </ProductInfoContainer> : <ProductInfoContainer><ClipLoader color={'#FF5733'}/></ProductInfoContainer>}
    </ScreenContainer>
  )
}

export default ProductScreen