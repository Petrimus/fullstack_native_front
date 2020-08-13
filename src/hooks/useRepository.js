// import { useState } from 'react';

import { GET_SINGLE_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const useRepository = (id) => { 
  const first = 6;
  const { data, loading, fetchMore, ...result } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network'
  });

  
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data.repository.reviews && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_SINGLE_REPOSITORY,
      variables: {
        id,
        first,
        after: data.repository.reviews.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            edges: [
              ...previousResult.repository.reviews.edges,
              ...fetchMoreResult.repository.reviews.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };


  // const repositories = data ? data : {};
  // return repositories;
  // console.log('use repo data.repository', data.repository)


  return {
    repository: data ? data.repository : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepository;





