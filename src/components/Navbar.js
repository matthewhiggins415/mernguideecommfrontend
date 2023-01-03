import React from 'react'
import { NavbarContainer, NavbarLink } from '../styles/components/Navbar.styles'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Gallactic Cat</NavbarLink>
      <NavbarLink to="/cart">Cart</NavbarLink>
    </NavbarContainer>
  )
}

export default Navbar