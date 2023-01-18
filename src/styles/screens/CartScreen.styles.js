import styled from "styled-components";

export const CartScreenContainer = styled.div`
  min-height: 90vh;
  padding: 20px;
`
export const CartItemsContainer = styled.div`
  width: 70%;
  margin-top: 20px;

  @media screen and (max-width: 500px) {  
    width: 100%;
  }
`

export const CheckoutBtn = styled.button`
  display: block;
  padding: 20px 10px;
  width: 300px;
  margin: 20px auto;
  background-color: gold;
  cursor: pointer;
  border: none;
  color: black;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.2px;
`

export const EmptyCartContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF5733;
`