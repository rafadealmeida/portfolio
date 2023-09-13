import styled, { keyframes } from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 768px;
    padding: 1em 1.5em;
    overflow-y: scroll;
    height: fit-content;
  }
  @media screen and (min-width: 768px) and (max-width: 960px) {
    flex-direction: column;
    max-width:960px;
    padding: 1em 1.5em;
    overflow-y: scroll;
    height: fit-content;
  }
`;
export const CardsContainer = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 gap: 1.5rem;
 overflow: scroll;
 margin: 0 auto;
 padding: 2rem 0;
 width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width: 768px) {
  height: 50%;
}
@media screen and (min-width: 768px) and (max-width: 960px) {
  height: 100%;
}

`;

const hideToShow = keyframes`
0% {opacity:0}
100% {opacity:1}
`

export const TextStyledResponsive = styled.p`
font-size: 16px;
display: none;
font-weight: bold;
animation-name:${hideToShow};
animation-duration:1.3s;
transition: all ease-in;
@media screen and (max-width: 768px) {
  display:inline ;
  margin-top:1rem ;
}
@media screen and (min-width: 768px) and (max-width: 960px) {
  font-size: 32px;
  display:inline ;
  margin-top:1rem ;
  margin-left: 3rem;
}
`;
