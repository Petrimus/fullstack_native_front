import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar'
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {   
    flex: 1,   
    backgroundColor: '#ecf0f1'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>       
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
      
    </View>
  );
};

export default Main;

/*
 <Text>Rate Repository Application</Text>
import Constants from 'expo-constants';
 marginTop: Constants.statusBarHeight,
*/