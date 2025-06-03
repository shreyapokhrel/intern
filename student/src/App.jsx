import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Container, MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from './redux/store'; 

const App = () => {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter> 
          <Container>
            <AppRoutes />
          </Container>
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
};

export default App;
