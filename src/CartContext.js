import { createContext, useState } from "react";

// define our context 
export const CartContext = createContext({
  items: [], 
  // items of cart = [{id: gsy2456hkwwklmse, src: 'src', price: 30, quantity: 2}, {id: whuiedw743, price: 15, quantity: 1}]
  getProductQuantity: () => {}, 
  addOneToCart: () => {}, 
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
})

// define our provider
export const CartProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([])

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined) {
      return 0
    }

    return quantity
  }

  const addOneToCart = (id, src, price, name) => {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      setCartProducts([...cartProducts, {id: id, src: src, price: price, quantity: 1, name: name}])
    } else {
        setCartProducts(
          cartProducts.map(
            product => product.id === id 
            ? {...product, quantity: product.quantity + 1 } 
            : product
          )
        )
    }
  }

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id)

    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id 
          ? {...product, quantity: product.quantity - 1 } 
          : product
        )
      )
    }
  }

  const deleteFromCart = (id) => {
    setCartProducts(cartProducts => cartProducts.filter(currentProduct => {
      return currentProduct.id !== id; 
    }))
  }

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      totalCost += (cartItem.price * cartItem.quantity)
      return totalCost
    })
    return totalCost
  }

  const contextValue = {
    items: cartProducts, 
    getProductQuantity, 
    addOneToCart, 
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export default CartProvider