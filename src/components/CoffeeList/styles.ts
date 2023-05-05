import styled from "styled-components";
 
import img from '../../assets/BackgroundBlur.png'; 
export const Container = styled.div`
  width: 100%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  position: relative;
   
  `
 
export const Title = styled.div`
 font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 2rem;
color: ${({ theme }) => theme.baseSubtitle};
line-height: 130%;
margin-bottom: 2rem;

`
  
export const CoffeeListGrid = styled.div`
display: grid; 
grid-template-columns: repeat( 4, 1fr);
gap: 2rem;
margin: 0px auto;

@media only screen and (max-width: 1108px) {

grid-template-columns: repeat( 3, 1fr);
}
@media only screen and (max-width: 768px) {

  grid-template-columns: repeat( 2, 1fr);
}

`