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
  padding: 10px 20px;
  width: 60%;
  margin: 30px auto;
  background-color: gold;
  color: black;
  border:1px solid gold;
  cursor: pointer;
  font-size: 20px;
`

export const EmptyCartContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF5733;
`