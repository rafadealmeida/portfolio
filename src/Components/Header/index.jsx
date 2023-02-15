import Tilt from 'react-parallax-tilt';
import Perfil from '../../assets/perfil.jpg';
import {
  HeaderStyled,
  Icon,
  TitleStyled,
  TextStyled,
  CardHomeInfos,
  SocialMedias,
  CardSocial,
  TitleSocialCard,
} from './style';
import './styledCardSocial.sass';

// eslint-disable-next-line arrow-body-style
export const Header = () => {
  return (
    <CardHomeInfos>
      <HeaderStyled>
        <Icon src={Perfil} alt="Foto de perfil de Rafael Almeida" />
        <TitleStyled>Olá, eu sou Rafa Almeida</TitleStyled>
        <TextStyled>
          Technology is my way to change the world and this is why I am a
          software engineer! I helped improve Brazil education I helped people
          share their opinions online now I am helping people get their money
          back!
        </TextStyled>
      </HeaderStyled>
      <SocialMedias>
        <Tilt
          perspective={500}
          glareMaxOpacity={0.45}
          scale={1.3}
        >
          <CardSocial backColorHouver="blue">
            <TitleSocialCard>LikedIn</TitleSocialCard>
          </CardSocial>
        </Tilt>
        <Tilt
          perspective={500}
          glareMaxOpacity={0.45}
          scale={1.3}
        >
          <CardSocial backColorHouver="gray">
            <TitleSocialCard>GitHub</TitleSocialCard>
          </CardSocial>
        </Tilt>

        <Tilt
          className="parallax-effect-glare-scale"
          perspective={500}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="inner-element" id="">
            <TitleSocialCard>Teste</TitleSocialCard>
          </div>
        </Tilt>
      </SocialMedias>
    </CardHomeInfos>
  );
};
