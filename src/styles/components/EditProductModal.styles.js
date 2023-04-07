import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: absolute;
  top: 100px;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, .3);
  color: white;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 5% auto;
  background-color: #FF5733;
  padding: 20px;
  border-radius: 20px;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
`

export const CloseBtn = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 25px;
`

export const SubmitBtn = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  background-color: transparent;
  color: white;
  border: none;
  transition: 150ms ease-in-out;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: #f7766d;
  }
`