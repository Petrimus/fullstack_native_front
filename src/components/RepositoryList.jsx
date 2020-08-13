import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  renderHeader = () => {
    return (
      <RepositoryListHeader
        latestFirst={this.props.latestFirst}
        highesRatingtFirst={this.props.highesRatingtFirst}
        lowestRatingFirst={this.props.lowestRatingFirst}
        orderText={this.props.orderText}
        handleSearchTermChange={this.props.handleSearchTermChange}
        searchTerm={this.props.searchTerm}
      />
    )
  }

  render() {
    // console.log('this repositories ', this.props.repositories)

    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={repositoryNodes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={this.props.handleRepositoryClick(item.id)} >
            <RepositoryItem item={item}
              showButton={false}
              testID='repo-item'
            />
          </TouchableOpacity>
        )
        }
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = ({
  latestFirst,
  highesRatingtFirst,
  lowestRatingFirst,
  order,
  sortBy,
  orderText,
  handleSearchTermChange,
  searchTerm,
  debouncedSearchTerm,
  handleRepositoryClick
}) => {
  // console.log('debounced search term', debouncedSearchTerm)

  const { repositories, loading } = useRepositories(
    order, sortBy, debouncedSearchTerm);

  if (loading) {
    return <Text>loading...</Text>
  }

  return <RepositoryListContainer
    repositories={repositories}
    latestFirst={latestFirst}
    highesRatingtFirst={highesRatingtFirst}
    lowestRatingFirst={lowestRatingFirst}
    orderText={orderText}
    handleSearchTermChange={handleSearchTermChange}
    searchTerm={searchTerm}
    handleRepositoryClick={handleRepositoryClick}
  />
};


export default RepositoryList;