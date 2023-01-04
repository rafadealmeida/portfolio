import React from 'react';
import Perfil from '../../assets/perfil.jpg';
import { HeaderStyled, Icon, TitleStyled, TextStyled } from './style';

export const Header = () => {
  return (
    <HeaderStyled>
      <Icon src={Perfil} alt="Foto de perfil de Rafael Almeida" />
      <TitleStyled>Olá, eu sou Rafa Almeida</TitleStyled>
      <TextStyled>
        Technology is my way to change the world and this is why I am a software
        engineer! I helped improve Brazil education I helped people share their
        opinions online now I am helping people get their money back!
      </TextStyled>
    </HeaderStyled>
  );
};
