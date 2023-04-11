import { MiniCardStyle } from './style';
import { TitleCard, SubTitleCard, TextCard } from '../Cards/style';

export const MiniCard = ({titulo, subTitulo, conteudo, link}) => (
  <MiniCardStyle href={link} target="_blank">
    <TitleCard>{titulo}</TitleCard>
    <SubTitleCard>{subTitulo}</SubTitleCard>
    <TextCard>
      {conteudo}
    </TextCard>
  </MiniCardStyle>
  // <MiniCardStyle />
);
