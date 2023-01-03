import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProductContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  border: 2px solid black; 
  width: 200px;
  height: 250px;
  color: black;
  margin: 10px;
  text-decoration: none;
`