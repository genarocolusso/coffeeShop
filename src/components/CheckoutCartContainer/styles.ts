import styled from "styled-components";



export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;   
background: #F3F2F2;
border-radius: 0px 32px 0px 32px  ; 

`
export const CheckoutDetails = styled.div`
display: flex;
flex-direction: column;
width: 100%; 
font-size: 0.875rem; 
gap: 0.75rem;
`;

export const Detail = styled.div`

color: ${({ theme }) => theme.baseText};
display: flex;
justify-content: space-between; 
`;

export const DetailTitle = styled.div`   `;

export const DetailPrice = styled.div`   `;

export const DetailTotal = styled.div`
color: ${({ theme }) => theme.baseSubtitle};
display: flex;
justify-content: space-between;
font-weight: bold;
font-size: 1.25rem;
`;


export const DetailConfirm = styled.button`
all: unset;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 8px;   
background: #DBAC2C;
border-radius: 6px;  
color: white;
text-transform: uppercase;;
fleX: 1;
margin-top:   0.75rem;
`;



/* item checkoutdetail */


export const CheckoutItemList = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0.5rem;
padding-bottom: 32px;
    margin-bottom: 24px;
    border-bottom: 1px solid #E6E5E5;
`;

export const CheckoutItem = styled.div`

width: 100%;
display: flex; 
gap: 1.5rem;
 
`;

export const CheckoutItemImage = styled.img`

max-width: 4rem;
width: 100%;
height: 4rem; 
`;

export const CheckoutItemActionDetails = styled.div`

width: 100%;
display: flex;
flex-direction: column;
gap: 0.5rem;
`;

export const CheckoutItemTitle = styled.div`
font-size: 1rem;
color: ${({ theme }) => theme.baseSubtitle};
`;
export const CheckoutItemActions = styled.div` 
display: flex;
flex-direction: row;
gap: 0.5rem;
`;

export const ItemRemove = styled.div`

color: ${({ theme }) => theme.baseText};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 8px;
gap: 4px; 
font-size: 0.75rem;
background: #E6E5E5;
border-radius: 6px;   

svg {
  color: ${({ theme }) => theme.purple}
}

`;
export const checkoutItemActions = styled.div``;
export const ItemPrice = styled.div``;


/* coffee add */

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