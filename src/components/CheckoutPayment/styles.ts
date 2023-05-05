import styled from "styled-components";



export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;
flex: 1; 

/* Base/Card */

background: #F3F2F2;
border-radius: 6px; 

`


export const HIcon = styled.div`  
font-size: 22px;
color: ${({ theme }) => theme.purpleDark};
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

export const PaymentTitle = styled.div` 

font-size: 0.75rem;
text-transform: uppercase;
color: ${({ theme }) => theme.baseText};

`;
export const MethodsContainer = styled.div` 
  
gap: 1rem; 
width: 100%;
display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

interface PaymentMethodsProps {
  selected?: boolean;
  onClick?: () => void;
}

export const PaymentMethodCard = styled.button<PaymentMethodsProps>`
all: unset; 
display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 12px; 
background: ${props => props.selected ? props.theme.purpleLight : '#E6E5E5'};
border: 1px solid ${props => props.selected ? props.theme.purple : '#E6E5E5'};
border-radius: 6px; 
flex-grow: 1;

svg{ font-size: 1rem; color: ${({ theme }) => theme.purple};}
 
`;