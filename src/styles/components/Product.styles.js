import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProductContainer = styled(Link)`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 250px;
  height: 300px;
  color: black;
  margin: 10px;
  text-decoration: none;
  border-radius: 10px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`