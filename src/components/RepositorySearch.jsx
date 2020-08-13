import React from 'react'

import { Searchbar } from 'react-native-paper';

const RepositorySearch = ({ handleSearchTermChange, searchTerm }) => {
   
  const onChangeSearch = query => handleSearchTermChange(query);  

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchTerm}
    />
  );
};
 
export default RepositorySearch
