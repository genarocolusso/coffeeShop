import styled from "styled-components";

export const MapPin = styled.div`  
font-size: 22px;
color: ${({ theme }) => theme.yellowDark};
`;
export const HeadFormText = styled.div` 

h1{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 130%;
}
p {
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 130%; 
color:  ${({ theme }) => theme.baseText};
}
`;
export const headingInfos = styled.div`
  display: flex;
  gap: 0.51rem;
`

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

width: 100%; 
background: #F3F2F2;
border-radius: 6px; 

`

export const InputWrapper = styled.div`
display: flex;
flex-direction: row; 
gap: 16px;
`

export const Input = styled.input`

box-sizing: border-box; 
padding: 12px; 
height: 42px; 
background: #EEEDED; 
border: 1px solid #E6E5E5;
border-radius: 4px; 
flex: none;
order: 0;
flex-grow: 0; 
font-size: 14px;
line-height: 130%;
&:focus{
  outline: none;
 opacity: 0.9;
}
  `

interface Inputboxprops {
  maxWidth?: number;
}

export const Inputbox = styled(Input) <Inputboxprops>`

   width: ${(props) => props.maxWidth ? props.maxWidth + `px` : "auto"};
   flex:  ${(props) => props.maxWidth ? 'none' : 1};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  `
