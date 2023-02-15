import { GlobalStyle } from './Components/GlobalStyle';
import { ContainerHome, CardsContainer } from './Components/HomeStyled/style';
import { Header } from './Components/Header';
import { Cards } from './Components/Cards';
import { MiniCardsContainer } from './Components/MiniCardsContainer';
import { MiniCard } from './Components/MiniCards';

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerHome>
        <Header />
        {/* <Cards /> */}

        <CardsContainer>
          <Cards
            categoria={'Work experience'}
            titulo={'Front end'}
            conteudo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
            repudiandae eaque quas iste? Est, earum vel. Eum, asperiores! Facere
            atque, ratione ducimus perspiciatis voluptatibus quisquam inventore
            veniam voluptate saepe`}
            link={
              'https://www.notion.so/Meu-plano-de-estudos-5136b58655d044b08114203ad328af36'
            }
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Front end'}
            conteudo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
            repudiandae eaque quas iste? Est, earum vel. Eum, asperiores! Facere
            atque, ratione ducimus perspiciatis voluptatibus quisquam inventore
            veniam voluptate saepe`}
            link={
              'https://www.notion.so/Meu-plano-de-estudos-5136b58655d044b08114203ad328af36'
            }
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Front end'}
            conteudo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
            repudiandae eaque quas iste? Est, earum vel. Eum, asperiores! Facere
            atque, ratione ducimus perspiciatis voluptatibus quisquam inventore
            veniam voluptate saepe`}
            link={
              'https://www.notion.so/Meu-plano-de-estudos-5136b58655d044b08114203ad328af36'
            }
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Front end'}
            conteudo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
            repudiandae eaque quas iste? Est, earum vel. Eum, asperiores! Facere
            atque, ratione ducimus perspiciatis voluptatibus quisquam inventore
            veniam voluptate saepe`}
            link={
              'https://www.notion.so/Meu-plano-de-estudos-5136b58655d044b08114203ad328af36'
            }
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Front end'}
            conteudo={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
            repudiandae eaque quas iste? Est, earum vel. Eum, asperiores! Facere
            atque, ratione ducimus perspiciatis voluptatibus quisquam inventore
            veniam voluptate saepe`}
            link={
              'https://www.notion.so/Meu-plano-de-estudos-5136b58655d044b08114203ad328af36'
            }
          />
          <MiniCardsContainer>
            <MiniCard />
          </MiniCardsContainer>
        </CardsContainer>
      </ContainerHome>
    </>
  );
}

export default App;
