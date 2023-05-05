import styled from "styled-components";

export const Container = styled.div`
 
 width: 100%;
display: grid;
grid-template-columns: 6fr 4fr;
gap: 2rem;   

align-items: start;
@media (max-width: 950px){
 
grid-template-columns:  1fr;
grid-template-rows: 1fr;
}
  `

export const CheckoutForms = styled.div` 

display : flex;
flex-direction: column;
gap: 0.725rem;
max-width: 100%;

 
`