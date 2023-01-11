import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;  margin-bottom: 10px;

  @media screen and (max-width: 500px) {  
    flex-direction: column;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  border-radius: 10px;

  @media screen and (max-width: 500px) {  
    width: 100%;
  }

`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  border-radius: 10px;

  @media screen and (max-width: 500px) {  
    width: 100%;
    padding: 15px;
  }
`

export const Img = styled.img`
  width: 75px;
  height: 75px;
  margin: 10px;
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const QuantityBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;  
  padding: 5px 10px;
  margin: 0px 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 10px;
`

export const RemoveBtn = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;  
  padding: 5px 10px;
  margin: 0px 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  background-color: red;
  color: white;
  border-radius: 10px;
`