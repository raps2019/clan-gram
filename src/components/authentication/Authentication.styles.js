import styled from "styled-components"
import { GlobalButton } from "../../GlobalStyle"

export const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Form = styled.form`
display: flex;
gap: 15px;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px 30px;
border-radius: 10px;
box-shadow: 0 19px 38px rgba(0,0,0,0.15), 0 15px 12px rgba(0,0,0,0.10);
`

export const Heading = styled.div`
font-size: 40px;
font-family: 'Pacifico', cursive;
`

export const FieldContainer = styled.div`
position: relative;
margin: 30px 0;
width: 300px;
max-width: 100%;
letter-spacing: 0.15em;
`

export const Input = styled.input`
border: none;
border-bottom: 1px solid black;
padding: 10px 0;
font-size: 14px;
width: 100%;
outline: none;

&:focus + label,
&:not(:placeholder-shown) + label
 {
  transform: translateY(-15px);
  font-size: 12px;
}
`
export const Label = styled.label`
position: absolute;
top: 0;
left: 0;
font-size: 14px;
pointer-events: none;
transform: translateY(15px);
transition: all 150ms ease-out;
`
export const Button = styled(GlobalButton)`
margin: 30px 0;
letter-spacing: 0.15em;
`

export const Text = styled.p`
letter-spacing: 0.15em;
font-size: 14px;
padding: 10px 0;
`

export const SmallText = styled.p`
letter-spacing: 0.15em;
font-size: 12px;
padding: 10px 0;
`




