// import { useState } from 'react';

import { GET_REPOSITORIES_WITH_SORT } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const useRepositories = (order, sortBy, debouncedSearchTerm) => {

  const orderDirection = order;
  const orderBy = sortBy;
  const searchKeyword = debouncedSearchTerm;
  // console.log('order ', order)
  // console.log('sort by ', sortBy)
  // console.log('term ', debouncedSearchTerm)


  const { data, loading } = useQuery(GET_REPOSITORIES_WITH_SORT, {
    variables: { orderDirection, orderBy, searchKeyword },
    fetchPolicy: 'cache-and-network'
  });

  // console.log('use repositories data ', data);
  // console.log('loading', loading)


  return { 
    repositories: data ? data.repositories : undefined,
    loading
  };

};

export default useRepositories;





