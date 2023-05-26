import React, { createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from '../navigation/AppRouter';
import { MainContainer } from '../common/containers/AppContainer/MainContainer';
import Store from '../../store/store';
import { IStore } from '../common/types/store.type';

import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';

const store = new Store();
export const Context = createContext<IStore>({ store });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => (
  <Context.Provider value={{ store }}>
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <MainContainer>
              <AppRouter />
            </MainContainer>
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Context.Provider>
);

export default AppContainer;
