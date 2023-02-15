import { MiniCardStyle } from './style';
import { TitleCard, SubTitleCard, TextCard } from '../Cards/style';

export const MiniCard = () => (
  <MiniCardStyle>
    <TitleCard>Teste</TitleCard>
    <SubTitleCard>Teste 2</SubTitleCard>
    <TextCard>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, cum quod
      in a dolor dolores, aspernatur numquam reprehenderit quisquam temporibus
      provident! Cum neque, laboriosam corporis incidunt recusandae quisquam
      pariatur itaque!
    </TextCard>
  </MiniCardStyle>
  // <MiniCardStyle />
);
