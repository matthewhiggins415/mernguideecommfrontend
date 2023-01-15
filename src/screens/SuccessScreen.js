import React, {useState, useEffect } from 'react'
import { success } from '../api/stripe'

//styles
import { SuccessScreenContainer, OrderConfirmed, SuccessHeaderContainer, SuccessContainer, ItemContainer, ItemHeader } from '../styles/screens/SuccessScreen.styles'
 
const SuccessScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [shipping, setShipping] = useState({})
  const [orders, setOrders] = useState([])
  const [subTotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [shippingCost, setShippingCost] = useState(0)

  useEffect(()=> {
    const path = window.location.pathname
    const query = window.location.search
    const url = path + query


    const fetchSuccessDetails = async (url) => {
      let response = await success(url)
      console.log(response)

      setName(response.data.customerDetails.name)
      setEmail(response.data.customerDetails.email)
      setShipping(response.data.customerDetails.address)
      setOrders(response.data.orderDetails)
      setSubtotal(response.data.subTotal / 100)
      setTotal(response.data.total / 100)
      setShippingCost(response.data.shippingCost / 100)
    }

    fetchSuccessDetails(url)
  }, [])

  return (
    <SuccessScreenContainer>
      <SuccessHeaderContainer>
        <OrderConfirmed>Order Confirmed</OrderConfirmed>
        <p>{`Thank you ${name} for your order. We are sending a copy of this order to ${email}`}</p>
      </SuccessHeaderContainer>
      <SuccessContainer>
        <ItemHeader>Order Items</ItemHeader>
        <div>
          {orders.map((orderItem) => (
            <ItemContainer>
              <p>{orderItem.description}</p>
              <p>{"$" + (orderItem.amount_total / 100)}</p>
            </ItemContainer>
          ))}
        </div>
      </SuccessContainer>
      <SuccessContainer>
        <ItemHeader>Shipping Summary</ItemHeader>
        <div>
          <ItemContainer>{shipping.line1}</ItemContainer>
          {shipping.line2 ? <ItemContainer>{shipping.line2}</ItemContainer> : null}
          <ItemContainer>{`${shipping.city}, ${shipping.state}`}</ItemContainer>
          <ItemContainer>{`${shipping.country} ${shipping.postal_code}`}</ItemContainer>
        </div>
      </SuccessContainer>
      <SuccessContainer>
        <ItemHeader>Payment Summary</ItemHeader>
        <div>
          <ItemContainer>
            <p>SubTotal</p>
            <p>{"$" + subTotal}</p>
          </ItemContainer>
          <ItemContainer>
            <p>Shipping</p>
            <p>{"$" + shippingCost}</p>
          </ItemContainer>
          <ItemContainer>
            <p>Total</p>
            <p>{"$" + total}</p>
          </ItemContainer>
        </div>
      </SuccessContainer>
    </SuccessScreenContainer>
  )
}

export default SuccessScreen