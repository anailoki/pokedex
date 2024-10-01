import 'react-native-gesture-handler';

import React from 'react';
import {StackNavigation} from './presentation/navigator/stackNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeContextProvider} from './presentation/context/ThemeContext';

export const PokedexApp = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigation />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
