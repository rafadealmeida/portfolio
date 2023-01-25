import styled from 'styled-components';
import {
  textGradientColorPrimary,
  textGradientColorSecondary,
} from '../UI/variables';

export const Icon = styled.img`
  width: 25%;
  border-radius: 50%;
  margin-bottom: 1rem;
  /* @media screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  } */
`;

export const HeaderStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 1rem;
width: 100%;
height: 100vh;
/* margin: 1rem 0; */
`;

export const TitleStyled = styled.h1`
font-size: 72px;
background: -webkit-linear-gradient(${textGradientColorPrimary},${textGradientColorSecondary});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width: 70%;
white-space:normal;
/* @media screen and (max-width: 768px) {
  font-size: 36px;
  width: 110%;

} */
`;

export const TextStyled = styled.p`
text-align: left;
width:50%;
line-height: 2rem;
`;

export const CardHomeInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const SocialMedias = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
width: 50%;
margin-bottom: 2rem;
`
