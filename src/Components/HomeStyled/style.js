import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
`;
export const CardsContainer = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 gap: 1rem;
 overflow: scroll;
 margin: 0 auto;
 padding: 2rem 0;
 width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  display: none;
}
`;
