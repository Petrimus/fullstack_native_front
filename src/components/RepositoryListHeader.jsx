import React from 'react'
import { View } from 'react-native';

import SearchBar from './RepositorySearch';
import MenuOptions from './MenuOptions';

const RepositoryListHeader = ({
  latestFirst,
  highesRatingtFirst,
  lowestRatingFirst,
  orderText,
  handleSearchTermChange,
  searchTerm
}) => {

  return (
    <View>
      <SearchBar
        handleSearchTermChange={handleSearchTermChange}
        searchTerm={searchTerm}
      />
      <MenuOptions
        latestFirst={latestFirst}
        highesRatingtFirst={highesRatingtFirst}
        lowestRatingFirst={lowestRatingFirst}
        orderText={orderText}
      />
    </View>
  )
}

export default RepositoryListHeader
