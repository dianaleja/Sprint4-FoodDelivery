import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from './components/styles/GlobalStyle';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    
      <GlobalStyles />
    <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);


