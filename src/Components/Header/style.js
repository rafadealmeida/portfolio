import styled from 'styled-components';
import {
  textGradientColorPrimary,
  textGradientColorSecondary,
  cardDark,
} from '../UI/variables';
import GitHubIcon from '../../assets/github-outline.svg'

export const IconStyled = styled.img`
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
margin: 4rem 0;
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
  background-image: url(${GitHubIcon});
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ;
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
