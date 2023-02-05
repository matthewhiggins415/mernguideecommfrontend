import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ScreenContainer = styled.div`
  min-height: 90vh;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const BackBtn = styled(Link)`
  width: 80px;
  text-align: center;
  text-decoration: none;
  color:  #FF5733;
  padding: 10px;
  letter-spacing: 1.2px;
  transition: 150ms ease-in-out;
  margin-bottom: 20px;
  border-radius: 10px;

  :hover {
    color: white;
    background-color:  #FF5733;
  }

  @media screen and (min-width: 500px) {  
    margin-left: 100px;
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LargeImg = styled.img`
  width: 300px;
  height: 300px;

  @media screen and (min-width: 500px) {  
    width: 500px;
    height: 400px;
  }
`

export const SmallImgContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (min-width: 500px) {  
    width: 450px;
  }
`

export const SmallImg = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;

  @media screen and (min-width: 500px) {  
    width: 100px;
    height: 100px;

  }
`

export const Name = styled.h1`
  margin-top: 20px;
  letter-spacing: 1.2px;
`

export const Description = styled.div`
  width: 300px;
  margin-top: 20px;

  @media screen and (min-width: 500px) {  
    width: 450px;
    text-align: center;
  }
`

export const Price = styled.h2`
  margin-top: 20px;
  letter-spacing: 1.2px;
`

export const AddToCart = styled.button`
  padding: 20px 10px;
  width: 300px;
  margin: 20px auto;
  background-color: gold;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.2px;
  color: black;

  @media screen and (min-width: 500px) {  
    width: 450px;
  }
`