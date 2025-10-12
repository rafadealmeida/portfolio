import { GlobalStyle } from './Components/GlobalStyle';
import {
  ContainerHome,
  CardsContainer,
  TextStyledResponsive,
} from './Components/HomeStyled/style';
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
            titulo={'PesqBrasil (MPA – Ministério da Pesca e Aquicultura)'}
            conteudo={`Sistema nacional de registro e gestão da pesca, desenvolvido em parceria com o Ministério da Pesca e Aquicultura (MPA), responsável por atender mais de 2 milhões de pescadores registrados e com média de 20 mil acessos diários.
              Atuo como líder técnico de front-end, conduzindo a implementação de módulos críticos, padronização de componentes, avaliação de Merge Requests e revisões de código, garantindo qualidade e consistência entre entregas.
              Participei ativamente da definição de arquitetura junto ao Tech Lead de organização, apoiando a disseminação de boas práticas entre equipes e o alinhamento técnico entre front e back-end.
              Em momentos críticos, também colaborei com o time de back-end, realizando ajustes e correções em serviços Java Spring Boot, além de apoiar testes de carga — desde a preparação de volumetria e saneamento de dados até a implementação de cenários complexos com o framework K6.
              Stack: React, Next.js, TypeScript, React Hook Form, Zustand, Java Spring Boot, PostgreSQL, Docker e K6.
              `}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Aplicativo mobile (iOS e Android)'}
            conteudo={`Aplicativo institucional com mais de 50 mil downloads, que centraliza serviços como credenciamento, reservas, agendamentos de exames e consultas, pacotes turísticos e validação de ingressos.
              Assumi papel de referência técnica no front-end mobile, liderando melhorias estruturais, implementando bibliotecas críticas e coordenando fluxos complexos (credenciamento, reagendamento de consultas, autenticação facial e integração com sistemas legados).
              Também atuei na publicação e configuração nas lojas oficiais (App Store e Play Store) e na orientação técnica de outros desenvolvedores.
              Stack: React Native, TypeScript, Expo, React Hook Form, Zod, TanStack Query, GitLab e metodologias ágeis (Scrum).
              `}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'S3 Painel TV (Android TV - Fire TV)'}
            conteudo={`Aplicativo corporativo voltado a exibição de notícias e senhas de atendimento em painéis inteligentes, integrados com totens e controle via Arduino.
              Fui responsável por conceber e liderar a arquitetura do front-end, garantindo estabilidade offline, automação de atualização de conteúdo e operação contínua em redes limitadas.
              O sistema hoje opera em redes de supermercados e lotéricas, impactando milhares de atendimentos mensais.
              Stack: React Native, TypeScript, Expo, Axios, CI/CD GitHub.
              `}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Artwork'}
            conteudo={`Plataforma internacional de gestão e revisão de artes gráficas, atendendo clientes no Brasil, EUA e Europa.
              Comecei como desenvolvedor júnior e evoluí para líder técnico front-end, conduzindo sprints, refinamentos e orientando o time em boas práticas.
              Atuei diretamente com stakeholders na análise de requisitos, priorização.
              Stack: React, Material UI, Zustand, React Hook Form, React Query, React Flow, i18next, GitHub e Scrum.
          `}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'S3 Configurator'}
            conteudo={`Ferramenta interna desenvolvida de forma autônoma e integral, para geração de documentos de configuração de sistemas de senhas eletrônicas.
              Liderei o projeto de ponta a ponta, desde o desenho arquitetural, UI/UX e desenvolvimento até a integração com sistemas legados Electron.
              O sistema reduziu em mais de 30% o volume de chamados de suporte e acelerou implantações em novos clientes.
              Stack: React, TypeScript, React Router, Material UI, React Hook Form, Git/GitHub e Scrum.`}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Extrator OS'}
            conteudo={`Sistema web para uso interno da empresa,para acompanhamento de Ordens de Serviço em tempo real, reduzindo tempo de resposta do suporte e aumentando a transparência
              para clientes.Foi otimizado a comunicação entre o suporte e clientes, permitindo consulta autônoma de status de ordens de serviço.
              Atuei como desenvolvedor responsável pelo front-end, desde a concepção até a entrega, priorizando performance e clareza na comunicação dos dados.
              Stack: React, TypeScript, React Router, Material UI, Git/GitHub, Scrum.`}
          />
          <TextStyledResponsive>Side Projects</TextStyledResponsive>
          <Cards
            categoria={'Side Project'}
            titulo={'Simplifica Doc'}
            conteudo={`Um sistema web para simplificar a criação de documentos repetitivos de forma ágil e eficiente.
            A inspiração para esse projeto surgiu de uma necessidade pessoal: meu pai estava envolvido em um trabalho
            que envolvia a elaboração constante de documentos semelhantes.
            Neste sistema o usuário prepara o arquivo previamente(no word por exemplo), seguindo os padrões do sistema,
            pontuando palavras ou frases a serem substituidas.
            Ao fazer o upload do arquivo sistema gerará
            um formulários com as palavras ou frases que o usuário deseja substituir. Preenchendo este formulário
            o sistema modificará o seu documentos com as informações inseridas pelo usuário.
            Stack: Next.js, TypeScript, Material UI, React Hook Form, Firebase.`}
            link={'https://simplifica-doc.vercel.app/'}
          />
          <Cards
            categoria={'Side Project'}
            titulo={'Repertório Fogo Divino'}
            conteudo={`Um sistema web para visualização visualização e organização de cifras musicais para os membros da banda.
            Esta iniciativa nasceu de uma motivação pessoal, uma vez que sou membro de uma banda religiosa que frequentemente
            adaptava cifras de músicas e criava versões personalizadas.
            Sentimos a necessidade de um espaço centralizado para armazenar e acessar esses documentos de maneira eficiente.
            Atuei como idealizador e desenvolvedor principal, aplicando boas práticas de usabilidade e organização de dados em tempo real.
            Stack: React, Material UI, React Router DOM.`}
            link={'https://repertoriofogodivino.vercel.app/missa'}
          />
          <Cards
            categoria={'Side Project - Freelancer'}
            titulo={'Regi Lucena'}
            conteudo={`Site institucional desenvolvido em WordPress + Elementor, com design exclusivo no Figma e foco na presença digital e posicionamento de marca.
              Atuei desde o design até a publicação final, garantindo performance e SEO adequados ao público-alvo.`}
            link={'https://regilucena.rafadealmeida.com.br/'}
          />
          {/* <Cards
            categoria={'Side Project'}
            titulo={'Absoluta Engenharia'}
            conteudo={`Site intitucional para uma empresa de engenharia, no qual apresntava a empresa, seus colaboradores
            e os serviços prestados. Neste projeto foi utilizado o CMS WordPress com Elmentor`}
            link={'https://absolutaengenhariabr.com/'}
          /> */}
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
            /> */}
          <TextStyledResponsive>Studies</TextStyledResponsive>
          <MiniCardsContainer>
            <MiniCard
              titulo={'Academic'}
              subTitulo={'Senac'}
              conteudo={`Técnico em Desenvolvimento de Sistema`}
            />
            <MiniCard
              titulo={'Academic'}
              subTitulo={'UnB'}
              conteudo={`Engenharias - Incompleto`}
            />
            <MiniCard
              titulo={'Certificate'}
              subTitulo={'Curso.dev'}
              conteudo={`Full Cycle - Em andamento`}
            />
            <MiniCard
              titulo={'Certificate'}
              subTitulo={'Alura'}
              link={
                'https://cursos.alura.com.br/degree/certificate/b6e31f58-fc67-4cad-92db-fe0d6d1d3c4b'
              }
              conteudo={`Formação em Front End`}
            />
            {/* <MiniCard
              titulo={'Certificate'}
              subTitulo={'Alura'}
              link={
                'https://cursos.alura.com.br/degree/certificate/2775a07d-9e2b-4b08-a7e9-2bacd25af4d5?lang=pt_BR'
              }
              conteudo={`JavaScript com foco no back-end `}
            /> */}
          </MiniCardsContainer>
        </CardsContainer>
      </ContainerHome>
    </>
  );
}

export default App;
