import styled from 'styled-components';
import { Card } from '../Cards/style';

// import {
//   cardDark,
//   textGradientColorPrimary,
//   textGradientColorSecondary,
// } from '../UI/variables';

export const MiniCardStyle = styled(Card)`
 width: 34%;
 margin: 0;
 @media screen and (max-width: 768px) {
   width: 90%;
 }
`;
