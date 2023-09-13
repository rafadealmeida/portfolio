import styled, { keyframes } from 'styled-components';
import {
  textGradientColorPrimary,
  textGradientColorSecondary,
  cardDark,
} from '../UI/variables';

export const IconStyled = styled.img`
  width: 25%;
  /* height: 13%; */
  border-radius: 50%;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    width: 40%;
  }
`;

export const HeaderStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 1rem;
width: 100%;
height: 100vh;
padding-top: 1rem;
@media screen and (max-width: 768px) {
  height: fit-content;
  margin: 0;

}
@media screen and (min-width: 768px) and (max-width: 960px) {
  height: fit-content;
  margin: 0;

}
`;

const hideToShow = keyframes`
0% {opacity:0}
100% {opacity:1}
`;

export const TitleStyled = styled.h1`
font-size: 72px;
background: -webkit-linear-gradient(${textGradientColorPrimary},${textGradientColorSecondary});
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
width: 70%;
white-space:normal;
animation-name:${hideToShow};
animation-duration:1.3s;
transition: all ease-in;
@media screen and (max-width: 768px) {
  font-size: 36px;

}
@media screen and (min-width: 768px) and (max-width: 960px) {
  font-size: 48px;
  width: 100%;

}
`;

export const TextStyled = styled.p`
text-align: left;
width:50%;
max-width: 50%;
line-height: 2rem;
@media screen and (max-width: 768px) {
  font-size: 13px;
  width:100%;
  max-width: 100%;

}
@media screen and (min-width: 768px) and (max-width: 960px) {
  font-size: 16px;
  width:95%;
  max-width: 100%;

}
`;

export const CardHomeInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 50%;
@media screen and (max-width: 768px) {
  max-width: 100%;
  justify-content: space-between;
  }
@media screen and (min-width: 768px) and (max-width: 960px) {
  max-width: 100%;
  justify-content: space-between;
  }
`;

export const SocialMedias = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
width: 50%;
margin-bottom: 2rem;
gap: 0.5rem;
`;
export const CardSocial = styled.div`
  height: '100px';
  width: '100px';
  padding: 2rem;
  background-color: ${cardDark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-style: italic;
  color: white;
  transform-style: preserve-3d;
  transition: all 0.25s;
  transform:translateZ(50%)
  :hover{
    background-color: ${(props) => props.backColorHouver};
  }
`;

export const TitleSocialCard = styled.h5`
  color: white;
  background-color: transparent;
`;

export const CardSocialParallex = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-style: italic;
    color: white;
    transform: translateZ(60px);
    background-color: transparent;
    :hover{
      background-color: ${(props) => props.backColorHouver};
    }
    `;

export const CardSocialLinkParallex = styled.a`
    width: 25%;
    padding: 2rem;
    height: 80%;
    @media screen and (max-width: 768px) {
      margin-top: 1em;
    padding: 0;
  }
@media screen and (min-width: 768px) and (max-width: 960px) {
  padding: 0;

  }
    `;
