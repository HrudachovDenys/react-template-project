import { createGlobalStyle } from 'styled-components';

import colors from '../patterns/colors';
import fonts from '../patterns/fonts';
import shadows from '../patterns/shadows';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const theme = {
  colors,
  fonts,
  shadows,
};