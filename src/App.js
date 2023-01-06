import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

require('./App.css')

function App() {
  let cart = []
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} exact/>
          <Route path="/product/:id" element={<ProductScreen cart={cart}/>} exact/>
          <Route path="/cart" element={<CartScreen cart={cart} />} exact/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
