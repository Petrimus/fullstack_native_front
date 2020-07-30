import React, { useState, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import AuthStorageContext from '../context/AuthStorageContext';
import { GET_AUTHORIZED_USER } from '../graphql/queries'

import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

import AppBarTab from './AppBarTap';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackColor,
    flexDirection: 'row',
  },
  textStyle: {
    marginHorizontal: 10,
    color: 'white'
  }
});

const AppBar = () => {
  const [auth, setAuth] = useState();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const { data } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });
 
  useEffect(() => {
    if (data) {
      setAuth(data.authorizedUser);
    }    
  }, [data])

  console.log('auth', auth)
  
  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore(); 
    setAuth(null);   
  };
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' path='/repositories' />
        {
          !auth ? <AppBarTab text='Sign In' path='/signin' /> :
            <TouchableWithoutFeedback
              onPress={() => signOut()}
            >
              <Text style={styles.textStyle}
                fontSize='subheading'
              >
                Sign out
              </Text>
            </TouchableWithoutFeedback>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;