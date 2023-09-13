import { Card, TitleCard, SubTitleCard, TextCard } from './style';

// eslint-disable-next-line arrow-body-style
export const Cards = ({titulo, categoria, conteudo, link}) => {
  return (
    <Card href={link} target="_blank">
      <TitleCard>{categoria}</TitleCard>
      <SubTitleCard>{titulo}</SubTitleCard>
      <TextCard>
        {conteudo}
      </TextCard>
    </Card>
  );
};
