import styled from 'styled-components';
import {
  textGradientColorPrimary,
  textGradientColorSecondary,
} from '../../Components/UI/variables';

export const Icon = styled.img`
  width: 10%;
  height: 10%;
  border-radius: 50%;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`;

export const HeaderStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 1rem;
width: 50%;
margin: 1rem auto;
`;

export const TitleStyled = styled.h1`
font-size: 72px;
background: -webkit-linear-gradient(${textGradientColorPrimary},${textGradientColorSecondary});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
width: 30%;
@media screen and (max-width: 768px) {
  font-size: 36px;
  width: 110%;

}
`;

export const TextStyled = styled.p`
text-align: left;
width: 25%;
line-height: 2rem;
`;
