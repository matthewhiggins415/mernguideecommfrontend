import React from 'react'
import { NavbarContainer, NavbarLink, SignoutBtn } from '../styles/components/Navbar.styles'
import { signOut } from '../api/user'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate()
  
  const handleSignOut = async (user) => {
    let response = await signOut(user)
    console.log(response)

    if (response.status === 204) {
      setUser({})
      navigate('/login')
    }
  }

  return (
    <NavbarContainer>
      <NavbarLink to="/">Gallactic Cat</NavbarLink>
      {Object.keys(user).length > 0 ? <SignoutBtn onClick={() => handleSignOut(user)}>sign out</SignoutBtn> : <NavbarLink to="/cart">Cart</NavbarLink>}
    </NavbarContainer>
  )
}

export default Navbar