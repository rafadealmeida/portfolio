import Tilt from 'react-parallax-tilt';
import { Icon } from '@iconify/react';
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
import {
  CardSocialLinkParallex,
  CardSocialParallex,
  TitleSocialCard,
} from './Components/Header/style';

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
            titulo={'Meu Sesc-DF (iOS e Android)'}
            conteudo={`Este aplicativo, com aais de 1500 mil usuários, foi desenvolvido para atender as necessidades dos usuários do Sesc-DF, oferecendo funcionalidades como acompanhamento e solicitação de credenciais,
              reservas de pacotes turísticos, e agendamento de exames e consultas médicas nas unidades do Sesc-DF. Também permite que os usuários acompanhem eventos organizados ou em
              parceria com o Sesc, além de validar ingressos para eventos diretamente pelo aplicativo para usuários com perfis específicos. O app conta com registro facial para facilitar
              o acesso às unidades através de catracas, suporte ao envio de mensagens via SAC, e acesso a uma seção de perguntas frequentes. Os usuários podem consultar informações
              detalhadas sobre as unidades, incluindo localizações, contatos e serviços disponíveis, visualizar parceiros que oferecem convênios, descontos e benefícios, além de acessar e
              baixar livros disponibilizados pelo Sesc.
              Ao entrar no projeto, assumi a responsabilidade por melhorias, implementação de bibliotecas, fluxos complexos como credenciamento, marcação e remarcação de exames e consultas
              e agendamento de pacotes, além da submissão nas lojas oficiais e configuração de publicação. Utilizei React Native, TypeScript, Expo, Zod, React Hook Form, TanStack Query,
              Git/GitLab e Scrum como metodologia ágil.
              `}
            parallaxCard
            children={
              <>
                <CardSocialLinkParallex
                  href="https://play.google.com/store/search?q=meu+sesc+df&c=apps&hl=pt_BR"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: 'transparent',
                    height: 30,
                    width: 100,
                  }}
                >
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareMaxOpacity={0.45}
                    scale={1.3}
                  >
                    <CardSocialParallex
                      href="https://play.google.com/store/search?q=meu+sesc+df&c=apps&hl=pt_BR"
                      target="_blank"
                    >
                      <TitleSocialCard>
                        <Icon
                          icon="mage:playstore"
                          color="white"
                          fontSize={'2rem'}
                          style={{ backgroundColor: 'transparent' }}
                        />
                      </TitleSocialCard>
                    </CardSocialParallex>
                  </Tilt>
                </CardSocialLinkParallex>
                <CardSocialLinkParallex
                  href="https://apps.apple.com/br/app/meu-sesc-df/id6502848536"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: 'transparent',
                    height: 30,
                    width: 100,
                  }}
                >
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareMaxOpacity={0.45}
                    scale={1.3}
                  >
                    <CardSocialParallex
                      href="https://apps.apple.com/br/app/meu-sesc-df/id6502848536"
                      target="_blank"
                    >
                      <TitleSocialCard>
                        <Icon
                          icon="ph:app-store-logo-bold"
                          color="white"
                          fontSize={'2rem'}
                          style={{ backgroundColor: 'transparent' }}
                        />
                      </TitleSocialCard>
                    </CardSocialParallex>
                  </Tilt>
                </CardSocialLinkParallex>
              </>
            }
          />
          <Cards
            categoria={'Work experience'}
            titulo={'S3 Painel TV (Android TV - Fire TV)'}
            conteudo={`Este aplicativo, desenvolvido para Android TV com foco na Fire TV, oferece funcionalidades de exibição de tabela de preços, notícias e gerenciamento de senhas de
              atendimento integradas com totens. As senhas retiradas pelos usuários eram inseridas no sistema e chamadas via controle remoto (usando Arduino) ou por computador.
              Enquanto as senhas não eram chamadas, ou o sistema não possui necessidade de utilização de senha , o app exibia notícias, com modos ajustáveis para cada necessidade:
              apenas notícias, ou notícias com exibição de senhas. O sistema
              verificava a conexão com a internet para garantir a atualização das notícias e, em caso de desconexão, exibia conteúdo salvo até a reconexão. O mesmo se aplicava para a
              tabela de preços, que era atualizada periodicamente.
              O projeto foi desenvolvido utilizando React Native, TypeScript, Expo e Axios, e é utilizado com sucesso em locais como lotéricas e supermercados (Superbom e Tatico),
              impactando milhares de usuários mensalmente.
              `}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Artwork'}
            conteudo={`Sistema web de controle e revisão de artes que atende usuários tantos nacionais
            quanto internacionais. Este projeto é especialmente notável, pois representou o meu primeiro passo no mundo profissional, em uma equipe com outros
            desenvolvedores. Ao longo do tempo, evoluí para o papel de principal desenvolvedor Front End, desempenhando um papel ativo na interação com os
            clientes, análise de novos requisitos e na implementação de novas funcionalidades, correção de bugs entre outras atividades. Ao longo do projeto, desenvolvi significativamente minha autonomia,
            o que me permitiu tomar decisões de forma independente e conduzir iniciativas e indicar novas soluções.
            Para este projeto utilizei React, JavaScript , Material UI, Zuztand, React Form
            Hook, Yup, Formik, i18next, React Flow, React Query entre outras bibliotecas,
            para  versionamento de código com Git e GitHub, Scrum como
            metodologia ágil.`}
            link={'https://artworkdev.precisionartworkmanagement.com/login'}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'S3 Configurator'}
            conteudo={`Sistema para uso interno da empresa, onde criava um documento de configuração de um sistema de chamada de senhas.
            O aspecto mais desafiador deste projeto residia na minha atuação autônoma. Liderei o projeto e fui principal responsável por todas as etapas,
            desde a concepção á programação inclusive na integração com os demais serviços. Este sistema reduziu significamente a quantidade de atendimentos de suporte,
            vinculados a este projeto além de fornecer mais agilidade para a implantação de novos clientes.
            Para este projeto, utilizei React com TypeScript, libs como React Router Dom, Material UI, React Hook Form,
            além de uso de hooks como useRef, useContext, useCallback e versionamento de código com Git e GitHub, Scrum como
            metodologia ágil e integração com um projeto em electron já existente.`}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Extrator OS'}
            conteudo={`Sistema web para uso interno da empresa, para clientes poderem vê o status de sua Ordem de Serviço, com mais agilidade
            ou até mesmo o suporte técnico, ter mais agilidade para conferir o status e compartilhar com o cliente. Esse projeto reduziu o tempo gasto para responder os clientes
            do seus Status, assim o suporte podendo se focar em outras atividades mais prioritárias.
            Para este projeto, utilizei React com TypeScript, libs como React Router Dom, Material UI e versionamento de código com Git e GitHub, Scrum como
            metodologia ágil.`}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'S3 Clint Configurator'}
            conteudo={`Sistema web para uso interno da empresa, para clientes poderem vê o status de sua Ordem de Serviço, com mais agilidade
            ou o suporte técnico, ter mais agilidade para conferir o status e compartilhar com o cliente. Esse projeto reduziu o tempo gasto para responder os clientes
            do seus Status, assim o suporte podendo se focar em outras atividades mais prioritárias.
            Para este projeto, utilizei React com TypeScript, libs como React Router Dom, Material UI e versionamento de código com Git e GitHub, Scrum como
            metodologia ágil.`}
          />
          <Cards
            categoria={'Work experience'}
            titulo={'Sesc App'}
            conteudo={`Aplicativo criado para Smartphones. Neste aplicativo o usuário poderia solicitar credencial do Sesc-DF, acompanhar e fazer reservas `}
          />
          <TextStyledResponsive>Side Projects</TextStyledResponsive>
          <Cards
            categoria={'Side Project'}
            titulo={'Simplifica Doc'}
            conteudo={`Um sistema web para simplificar a criação de documentos repetitivos de forma ágil e eficiente.
            A inspiração para esse projeto surgiu de uma necessidade pessoal: meu pai estava envolvido em um trabalho
            que envolvia a elaboração constante de documentos semelhantes.
            Isso me motivou a pensar em como automatizar e acelerar o processo, já que a maior parte desses documentos
            compartilhava semelhanças, com apenas algumas partes que
            precisavam ser personalizadas.
            Neste sistema o usuário prepara o arquivo previamente(no word por exemplo), seguindo os padrões do sistema,
            pontuando palavras ou frases a serem substituidas.
            Ao fazer o upload do arquivo sistema gerará
            um formulários com as palavras ou frases que o usuário deseja substituir. Preenchendo este formulário
            o sistema modificará o seu documentos com as informações inseridas pelo usuário. Neste sistema foi usado o
            Framework NextJs com TypeScript,
            Material UI, React-Hook-Form e utilizando Firebase como banco de dados`}
            link={'https://simplifica-doc.vercel.app/'}
          />
          <Cards
            categoria={'Side Project'}
            titulo={'Repertório Fogo Divino'}
            conteudo={`Um sistema web para visualização visualização e organização de cifras musicais para os membros da banda.
            Esta iniciativa nasceu de uma motivação pessoal, uma vez que sou membro de uma banda religiosa que frequentemente
            adaptava cifras de músicas e criava versões personalizadas.
            Sentimos a necessidade de um espaço centralizado para armazenar e acessar esses documentos de maneira eficiente.
            O sistema foi projetado para categorizar e organizar cifras em repertórios específicos, proporcionando fácil acesso aos músicos.
            Outra necessidade que o sistema atendeu era quando íamos tocar em cerimonias onde não tínhamos um repertório definido,
            e os pedidos de músicas podiam surgir a qualquer momento. Então previamente preparavamos diversas músicas que poderiam ser solicitadas
            e deixavamos no sistema separado por categorias para facilitar e agilizar a busca quando necessário.
            Neste sistema foi utilizado React, com Material UI, React Router Rom`}
            link={'https://repertoriofogodivino.vercel.app/missa'}
          />
          <Cards
            categoria={'Side Project - Freelancer'}
            titulo={'Regi Lucena'}
            conteudo={`Site intitucional para uma cabeleleira descrevendo suas habilidades, e os serviços prestados. Para este site efetuei o desgin do site.
             Neste projeto foi utilizado o CMS WordPress com Elmentor e o Figma para fazer os protótipos e desgin`}
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
              conteudo={`Técnico em Desenvolvimento de Sistema - Cursando`}
            />
            <MiniCard
              titulo={'Academic'}
              subTitulo={'UnB'}
              conteudo={`Engenharias - Incompleto`}
            />
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
          </MiniCardsContainer>
        </CardsContainer>
      </ContainerHome>
    </>
  );
}

export default App;
