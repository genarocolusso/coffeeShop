import styled from "styled-components";
 
import img from '../../assets/BackgroundBlur.png'; 
export const Container = styled.div`
  width: 100%;
  padding: 6rem 0rem;
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  position: relative;
  
  &:before {
    content: '';
    background: url(${img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 60vw;
    height: 100%;
    top: 0;
    position: absolute;
    -webkit-filter: blur(38px);
    -webkit-filter: blur(38px);
    filter: blur(38px);
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.8;
   
  }
 
  @media only screen and (max-width: 768px) {
    flex-direction: column;

    align-items: center;
    justify-content: center; 
    gap: 3rem;
  }
  `
 
export const Title = styled.div`
 font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 3rem;
color: ${({ theme }) => theme.baseTitle};
line-height: 130%;
`
 
export const Infos = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
width: 100%;
max-width: 588px;

position: relative;
`

export const Description = styled.div`
  font-style: normal;
font-weight: 400;
font-size: 1.25rem;
line-height: 130%; 
color: ${({ theme }) => theme.baseSubtitle};
  `
 export const GoodList = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 1.25rem 0.2rem;
 margin-top: 4rem;
 `
 
export const ListItem = styled.div`
display: flex;
flex-direction: row; 
align-items: center;
gap: 0.5rem;
color: ${({ theme }) => theme.baseText};
 
 
`
export const Icon = styled.div` 
 
  background: ${(props) => props.color ? props.theme[props.color] : 'gray'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 32px;
  height: 32px;
  color: white; 
  border-radius: 1000px; 
 
 `

export const HeroImage = styled.div`

position: relative;
 @media only screen and (max-width: 768px) {
    flex-direction: column;

    align-items: center;
    justify-content: center;  
  }

`
