import styled from 'styled-components'

export const SuccessScreenContainer = styled.div`
  max-width: 50%;
  margin: 25px auto;

  @media screen and (max-width: 500px) {  
    max-width: 90%;
  }
`

export const OrderConfirmed = styled.h2`
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 900;
`

export const SuccessHeaderContainer = styled.div`
  text-align: center;
  background-color: purple;
  margin: 20px 0px;
  padding: 20px;
  background-color: lightgreen;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  margin: 20px 0px;
  border-radius: 15px;
`

export const SuccessContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  margin: 20px 0px;
  padding: 20px;
  border-radius: 15px;
`

export const ItemHeader = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`
