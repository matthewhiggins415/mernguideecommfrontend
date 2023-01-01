import React from 'react'
import { NavbarContainer, NavbarLink } from '../styles/components/Navbar.styles'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">logo</NavbarLink>
      <NavbarLink to="/cart">cart</NavbarLink>
    </NavbarContainer>
  )
}

export default Navbar