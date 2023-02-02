import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #FF5733;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`
export const NavbarLink = styled(Link)`
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: 30px;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 1.2px;
`

export const SignoutBtn = styled.button`
  padding: 15px 10px;
  background-color: transparent;
  color: white;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  border: none;
`