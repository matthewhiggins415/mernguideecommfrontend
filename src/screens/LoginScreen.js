import React, { useState } from 'react'
import { loginUser } from '../api/user'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Input, Btn } from '../styles/screens/LoginScreen.styles'

const LoginScreen = ({ setUser, handleNotify }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '', 
    password: ''
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // make api call to back login route

    try {
      let response = await loginUser(formData)
      console.log(response)
      setUser(response.data.user)
      navigate('/adminhome')
    } catch(err) {
      console.log(err)
      handleNotify("login failed", "warning")
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" value={formData.email} placeholder="enter email" onChange={onChange} required/>
        <Input type="password" name="password" value={formData.password} placeholder="enter password" onChange={onChange} required/>
        <Btn type="submit">submit</Btn>
      </Form>
    </Container>
  )
}

export default LoginScreen