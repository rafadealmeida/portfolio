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
            titulo={'Projeto Artwork'}
            conteudo={`Sistema de controle e revisão de artes que atende usuários tantos nacionais
            quanto internacionais. Para este projeto utilizei React, JavaScript , Styled-components, Material UI, Zuztand, React Form
            Hook, Yup, Formik, i18next, React Flow entre outras bibliotecas, para  versionamento de código com Git e GitHub, Scrum como
            metodologia ágil.`}
            link={
              'https://artwork-front.cleversystems.net/login'
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
          {/* <Cards
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
          /> */}
          <MiniCardsContainer>
            <MiniCard
            titulo={'Certificados'}
            link={'https://cursos.alura.com.br/degree/certificate/b6e31f58-fc67-4cad-92db-fe0d6d1d3c4b'}
            conteudo={`Formação em Front End`}/>
            <MiniCard
            titulo={'Certificados'}
            link={'https://cursos.alura.com.br/degree/certificate/b6e31f58-fc67-4cad-92db-fe0d6d1d3c4b'}
            conteudo={`Formação em Front End`}/>
          </MiniCardsContainer>
        </CardsContainer>
      </ContainerHome>
    </>
  );
}

export default App;
