import {
  Card,
  TitleCard,
  SubTitleCard,
  TextCard,
  CardsParralax,
} from './style';

// eslint-disable-next-line arrow-body-style
export const Cards = ({
  titulo,
  categoria,
  conteudo,
  link,
  parallaxCard,
  children,
}) => (
  <Card href={link} target="_blank">
    <TitleCard>{categoria}</TitleCard>
    <SubTitleCard>{titulo}</SubTitleCard>
    <TextCard>{conteudo}</TextCard>
    {parallaxCard !== undefined && <CardsParralax>{children}</CardsParralax>}
  </Card>
);
