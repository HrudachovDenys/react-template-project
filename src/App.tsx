import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import AppRouter from './router/AppRouter';
import store from './store';
import { getTheme } from './theme';

const { theme, GlobalStyle } = getTheme('base');

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>
);

export default App;
