import styled from "styled-components";

export const Container = styled.div`
 background: ${({ theme }) => theme.basecard};
border-radius: 6px 36px;
width: 256px;
height: 310px; 
padding: 0px 20px 20px 20px;
  `

export const ImageCoffee = styled.div`
width: 7.5rem;
height: 7.5rem;
margin: 0px auto;
transform: translate( 0px, -20px);
img{
  width: 100%;
  height: 100%;
}
`
export const CoffeeTitle = styled.div`
font-size: 1.25rem;
font-family: 'Baloo 2';
line-height: 130%;
margin-bottom: 0.5rem;

text-align: center;
`
export const CoffeeDescription = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
/* or 18px */

text-align: center;

margin-bottom: 0.5rem;
/* Base/Label */

color: #8D8686;
`
export const CoffeeTagWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 2px;
margin-bottom: 1rem;
`
export const CoffeeTag = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 8px;
 
height: 21px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 130%;
/* Brand/Yellow Light */
color: #C47F17;
background: #F1E9C9;
border-radius: 100px;
text-transform: uppercase;


`

export const CoffeePriceActions = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;

export const CoffeePrice = styled.div`
font-family: 'Roboto';

font-size:1.2rem;
line-height: 130%;
`;
export const CoffeeActions = styled.div`
display: flex;
gap: 1rem;
`
export const CoffeeAddInput = styled.div`
display: flex;
background: ${({ theme }) => theme.baseButton};
padding: 8px;
border-radius: 0.5rem;
justify-content:  space-between;
align-items: center;
gap: 6px;
`;

export const CoffeeAddInputButtons = styled.div`
display: flex;
color: ${({ theme }) => theme.purple};
align-items: center;
cursor: pointer;
&:hover {
  opacity: 0.8;

}
`;

export const CoffeeQuantity = styled.div`

color: ${({ theme }) => theme.baseTitle};
`;

export const AddCart = styled.button`
all: unset;
background: ${({ theme }) => theme.purpleDark};
padding: 0.5rem;
display: flex;
justify-content: center;
align-items: center;
color: white;
border-radius:8px;
margin: 0 0,25rem;

`