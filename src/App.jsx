import { GlobalStyle } from './Components/GlobalStyle';
import { ContainerHome, CardsContainer,TextStyledResponsive } from './Components/HomeStyled/style';
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
        <TextStyledResponsive>Projects</TextStyledResponsive>
          <Cards
            categoria={'Work experience'}
            titulo={'Artwork'}
            conteudo={`Sistema de controle e revisão de artes que atende usuários tantos nacionais
            quanto internacionais. Para este projeto utilizei React, JavaScript , Styled-components, Material UI, Zuztand, React Form
            Hook, Yup, Formik, i18next, React Flow,m React Query entre outras bibliotecas, para  versionamento de código com Git e GitHub, Scrum como
            metodologia ágil.`}
            link={'https://artwork-front.cleversystems.net/login'}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'S3 Configurador'}
            conteudo={`Sistema para uso interno da empresa, onde criava um documento de configuração de um sistema de chamada de senhas.
            Para este projeto, utilizei React com TypeScript, libs como react router dom, Material, react hook form,
            além de uso de hooks como useRef, useContext. O mais desafiador deste projeto foi que participei nele de forma autonôma,
            partindo da concepção à programação deste.`}
            link={
              'https://www.notion.so/Meu-plano-de-estudos-5136b58655d044b08114203ad328af36'
            }
          />
          <TextStyledResponsive>Side Projects</TextStyledResponsive>
          <Cards
            categoria={'Side Project'}
            titulo={'Simplifica Doc'}
            conteudo={`Um sistema web para efetuação de documentos repetitivos, de maneira mais ágil e rápida.
            Neste sistema você sobre um arquivo preparado, seguindo os padrões do sistema restacando palavras ou frases a serem substituidas, preenche um formulário
            que o sistema criará, e seu documento com a informações colocadas no formulário estará pronto. Neste sistema foi usado o Framework NextJs com TypeScript,
            Material UI, e utilizando Firabase  como banco de dados, integrado com o backend do NextJs`}
            link={'https://simplifica-doc.vercel.app/'}
            />
          <Cards
            categoria={'Side Project'}
            titulo={'Repertório Fogo Divino'}
            conteudo={`Um sistema web para visualização de cifras para os músicos da banca, separados por
            categorias e repertórios específicos. Neste sistema foi utilizado React, com Material UI, react router dom`}
            link={'https://repertoriofogodivino.vercel.app/missa'}
            />
          <Cards
            categoria={'Side Project'}
            titulo={'Regi Lucena'}
            conteudo={`Site intitucional para uma cabeleleira. Neste projeto foi utilizado o CMS WordPress com Elmentor`}
            link={'https://regilucena.000webhostapp.com/'}
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
          <TextStyledResponsive>Studies</TextStyledResponsive>
          <MiniCardsContainer>
            <MiniCard
              titulo={'Certificate'}
              subTitulo={'Alura'}
              link={
                'https://cursos.alura.com.br/degree/certificate/b6e31f58-fc67-4cad-92db-fe0d6d1d3c4b'
              }
              conteudo={`Formação em Front End`}
            />
            <MiniCard
              titulo={'Certificate'}
              subTitulo={'Alura'}
              link={
                'https://cursos.alura.com.br/degree/certificate/2775a07d-9e2b-4b08-a7e9-2bacd25af4d5?lang=pt_BR'
              }
              conteudo={`JavaScript com foco no back-end `}
            />
            <MiniCard
              titulo={'Academic'}
              subTitulo={'Senac'}
              conteudo={`Técnico em Desenvolvimento de Sistema - Cursando`}
            />
            <MiniCard
              titulo={'Academic'}
              subTitulo={'UnB'}
              conteudo={`Engenharias - Incompleto`}
            />
          </MiniCardsContainer>
        </CardsContainer>
      </ContainerHome>
    </>
  );
}

export default App;
