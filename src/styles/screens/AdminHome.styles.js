import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;

  @media screen and (min-width: 450px) {  
    width: 480px;
    margin: 30px auto;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Btn = styled.button`
  color: black;
  padding: 5px 10px;
  font-size: 18px;
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