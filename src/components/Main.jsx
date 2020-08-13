import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import { useHistory } from 'react-router-native'

import AppBar from './AppBar'
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import Review from './Review';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
});

const Main = () => {
  const [repositorySort, setRepositorySort] = useState('CREATED_AT');
  const [order, setOrder] = useState('ASC');
  const [orderText, setOrderText] = useState('Latest repositories')
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const history = useHistory();

  const handleLatestRepository = () => { 
    setRepositorySort('CREATED_AT');
    setOrderText('Latest repositories')
  };

  const handleHighestRatingFirst = () => {
    setRepositorySort('RATING_AVERAGE');
    setOrder('DESC');
    setOrderText('Highest rated reposioties')
  }

  const handleLowestRatingFirst = () => {
    setRepositorySort('RATING_AVERAGE');
    setOrder('ASC');
    setOrderText('Lowest rated repositories')
  }

  const handleSearchTermChange = (search) => {
    setSearchTerm(search);
  }

  const handleRepositoryClick = (id) => () => {
    history.push(`/repository/${id}`)
  }

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList
            latestFirst={handleLatestRepository}
            highesRatingtFirst={handleHighestRatingFirst}
            lowestRatingFirst={handleLowestRatingFirst}
            order={order}
            sortBy={repositorySort}
            orderText={orderText}
            handleSearchTermChange={handleSearchTermChange}
            searchTerm={searchTerm}
            debouncedSearchTerm={debouncedSearchTerm}
            handleRepositoryClick={handleRepositoryClick}
          />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/repository/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>

    </View>
  );
};

export default Main;