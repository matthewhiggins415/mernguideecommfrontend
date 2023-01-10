import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

import CartProvider from './CartContext'


require('./App.css')

function App() {
  return (
    <Router>
      <CartProvider>
       <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} exact/>
          <Route path="/product/:id" element={<ProductScreen />} exact/>
          <Route path="/cart" element={<CartScreen />} exact/>
        </Routes>
       </div>
       </CartProvider>
    </Router>
  );
}

export default App;
