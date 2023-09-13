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
          Desenvolvedor Front-End desde 2022, trabalhando com tecnologias como
          React, React Native, NextJS , JavaScript, TypeScript, HTML , CSS e WordPress, utilizando metodologias
          ágeis, como Scrum. Apaixonado por desafios, por aprender coisas novas
          buscando sempre qa evolução e novas
          responsabilidades pra assumir. Já trabalhei em projeto que atinge centenas
          de usuários tantos nacionais como internacionais.
        </TextStyled>
      </HeaderStyled>
      <SocialMedias>
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
      </SocialMedias>
    </CardHomeInfos>
  );
};
