import { useState } from 'react'
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import SuccessScreen from './screens/SuccessScreen'
import LoginScreen from './screens/LoginScreen'
import AdminHome from './screens/AdminHome'

import CartProvider from './CartContext'

require('./App.css')

function App() {
  const [user, setUser] = useState({})

  const handleNotify = (message, type) => {
    if (type === 'warning') {
      toast.warn(`${message}`)
    } else if (type === 'danger') {
      toast.error(`${message}`)
    } else {
      toast.success(`${message}`)
    }
  }

  return (
    <Router>
      <CartProvider>
       <div>
        <Navbar user={user}/>
        <ToastContainer theme="light" position="top-right" autoClose={1500}/>
        <Routes>
          <Route path="/" element={<HomeScreen notify={handleNotify}/>} exact/>
          <Route path="/product/:id" element={<ProductScreen notify={handleNotify}/>} exact/>
          <Route path="/cart" element={<CartScreen notify={handleNotify}/>} exact/>
          <Route path="/order/success" element={<SuccessScreen />} />
          <Route path="/login" element={<LoginScreen setUser={setUser} handleNotify={handleNotify}/>} />
          <Route path="/adminhome" element={<AdminHome user={user}/>} />
        </Routes>
       </div>
       </CartProvider>
    </Router>
  );
}

export default App;
