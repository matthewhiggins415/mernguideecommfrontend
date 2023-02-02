import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const BtnContainer = styled.div`
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Btn = styled.button`
  color: black;
  padding: 5px 10px;
  border: none;
  background-color: white;
  cursor: pointer;
  transition: 150ms ease-in-out;
  border-radius: 4px;

  :hover {
    background-color: black;
    color: white;
  }
`

export const DeleteBtn = styled.button`
  color: black;
  padding: 5px 10px;
  border: none;
  background-color: white;
  cursor: pointer;
  transition: 150ms ease-in-out;
  border-radius: 4px;

  :hover {
    background-color: red;
    color: white;
  }
`