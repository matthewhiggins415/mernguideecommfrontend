import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: lightblue;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`
export const NavbarLink = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  letter-spacing: 1.2px;
`