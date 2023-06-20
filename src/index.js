import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from './components/styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from "./redux/store/store"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <ChakraProvider>
      <GlobalStyles />
    <AppRouter />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>
);


