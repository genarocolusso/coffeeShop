import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;    
  justify-content: space-between; 
  `

export const City = styled.div`
 
display: flex;
flex-direction: row;
align-items: center;    
justify-content: space-between; 
padding: 0.375rem;
gap: 0.5rem;
border-radius: 0.375rem;
background-color: ${({ theme }) => theme.purpleLight};
color: ${({ theme }) => theme.purpleDark};

svg {
    color: ${({ theme }) => theme.purple};

}
`

export const Cart = styled.div`
 display: flex;
flex-direction: row;
align-items: center;    
justify-content: center;
padding: 0.5rem;
border-radius: 0.375rem;
background-color: ${({ theme }) => theme.yellowLight};
color: ${({ theme }) => theme.yellowDark};


svg {
    color: ${({ theme }) => theme.yellowDark}; 
}
  
  `
  export const Account = styled.div`
 
  display: flex;
  flex-direction: row;
  align-items: center;    
  gap: 1rem;
  `