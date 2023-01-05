import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ScreenContainer = styled.div`
  min-height: 90vh;
  width: 70%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
`

export const BackBtn = styled(Link)`
  width: 80px;
  text-align: center;
  text-decoration: none;
  color: black;
  padding: 10px;
  border: 1px solid black;
  letter-spacing: 1.2px;
  transition: 150ms ease-in-out;

  :hover {
    color: white;
    background-color: black;
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LargeImg = styled.img`
  width: 400px;
  height: 400px;
`

export const SmallImgContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const SmallImg = styled.img`
  width: 80px;
  height: 80px;
`

export const Name = styled.h1`
  margin-top: 20px;
  letter-spacing: 1.2px;
`

export const Description = styled.div`
  width: 400px;
  margin-top: 20px;
`

export const Price = styled.h2`
  margin-top: 20px;
  letter-spacing: 1.2px;
`

export const AddToCart = styled.button`
  padding: 20px 10px;
  width: 400px;
  margin: 20px auto;
  background-color: gold;
  cursor: pointer;
  border: none;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.2px;
`