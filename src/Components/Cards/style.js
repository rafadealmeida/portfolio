import styled, { keyframes } from 'styled-components';
import {
  cardDark,
  textGradientColorPrimary,
  textGradientColorSecondary,
} from '../UI/variables';

const bottomToTop = keyframes`
0% {transform: translateY(150%)}
100% {transform: translateY(0%)}
`;

export const Card = styled.a`
  background-color:${cardDark};
  box-sizing: content-box;
  padding: 2rem;
  width: 80%;
  margin: 0 auto;
  /* height: 10%; */
  line-height: 1.5em;
  border-radius: 0.5rem;
  transition: ease-in  0.3s;
  :hover{
    scale:1.05
  }
  :nth-last-child(-n + 4){
    animation-name:${bottomToTop};
    animation-duration:1.3s;
  }
`;

export const TitleCard = styled.h4`
  background: -webkit-linear-gradient(${textGradientColorPrimary},${textGradientColorSecondary});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const SubTitleCard = styled.h2`
  font-weight: bold;
  font-size: 2em;
  margin: 0.2rem 0;
  background-color: transparent;
`;
export const TextCard = styled.p`
  background-color: transparent;
`;
