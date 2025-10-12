import Tilt from 'react-parallax-tilt';
import { Icon } from '@iconify/react';
import Perfil from '../../assets/foto_perfil.jpg';
// import Perfil from '../../assets/perfil.jpg';
import {
  HeaderStyled,
  IconStyled,
  TitleStyled,
  TextStyled,
  CardHomeInfos,
  SocialMedias,
  TitleSocialCard,
  CardSocialParallex,
  CardSocialLinkParallex,
} from './style';
import './styleTiltcss.css';

// eslint-disable-next-line arrow-body-style
export const Header = () => {
  return (
    <CardHomeInfos>
      <HeaderStyled>
        <IconStyled src={Perfil} alt="Foto de perfil de Rafael Almeida" />
        <TitleStyled>Olá, eu sou Rafa Almeida</TitleStyled>
        <TextStyled>
          Desenvolvedor Front-End desde 2022, com sólida experiência em{' '}
          <strong>React</strong>, <strong>React Native</strong>,{' '}
          <strong>Next.js</strong>,<strong>TypeScript</strong>,{' '}
          <strong>JavaScript</strong>, <strong>HTML</strong>,{' '}
          <strong>CSS</strong> e <strong>WordPress</strong>, aplicando
          <strong>metodologias ágeis (Scrum)</strong> e boas práticas de
          arquitetura de software.
        </TextStyled>

        <TextStyled>
          Atuo como{' '}
          <strong>
            referência técnica e líder de projeto front-end hands-on
          </strong>{' '}
          em iniciativas de grande escala no <strong>Sesc-DF</strong> e no
          sistema
          <strong> PesqBrasil</strong>, que atende{' '}
          <strong>mais de 2 milhões de usuários cadastrados</strong>e registra
          aproximadamente <strong>20 mil acessos diários</strong>. Tenho foco em{' '}
          <strong>qualidade, performance e escalabilidade</strong>, além de
          contribuir ativamente em{' '}
          <strong>
            mentoria técnica, revisão de código e integração entre equipes
          </strong>
          .
        </TextStyled>

        <TextStyled>
          Sou movido por{' '}
          <strong>
            desafios, aprendizado contínuo e responsabilidade técnica
          </strong>
          , buscando constantemente evoluir como profissional e líder,
          entregando soluções que geram{' '}
          <strong>impacto real e valor para as pessoas</strong>.
        </TextStyled>
      </HeaderStyled>
      <SocialMedias>
        <CardSocialLinkParallex
          href="https://www.linkedin.com/in/rafa-almeida-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareMaxOpacity={0.45}
            scale={1.3}
          >
            <CardSocialParallex
              href="https://www.linkedin.com/in/rafa-almeida-dev/"
              target="_blank"
            >
              <TitleSocialCard>
                <Icon
                  icon="akar-icons:linkedin-v2-fill"
                  color="white"
                  fontSize={'2rem'}
                  style={{ backgroundColor: 'transparent' }}
                />
              </TitleSocialCard>
            </CardSocialParallex>
          </Tilt>
        </CardSocialLinkParallex>

        <CardSocialLinkParallex
          href="https://github.com/rafadealmeida"
          target="_blank"
          rel="noreferrer"
        >
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareMaxOpacity={0.45}
            scale={1.3}
          >
            <CardSocialParallex
              href="https://github.com/rafadealmeida"
              target="_blank"
            >
              <TitleSocialCard>
                <Icon
                  icon="ri:github-line"
                  color="white"
                  fontSize={'2rem'}
                  style={{ backgroundColor: 'transparent' }}
                />
              </TitleSocialCard>
            </CardSocialParallex>
          </Tilt>
        </CardSocialLinkParallex>
      </SocialMedias>
    </CardHomeInfos>
  );
};
