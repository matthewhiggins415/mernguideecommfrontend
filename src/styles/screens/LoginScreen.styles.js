import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const Input = styled.input`
  padding: 5px 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`

export const Btn = styled.button`
  color: black;
  padding: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
  transition: 150ms ease-in-out;
  border-radius: 4px;

  :hover {
    background-color: #FF5733;
    color: white;
  }
`