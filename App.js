import React from 'react';
// import { View, StyleSheet } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-native-paper';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/context/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Provider>
            <Main />
          </Provider>
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  )
};

export default App;