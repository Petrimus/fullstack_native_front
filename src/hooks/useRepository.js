// import { useState } from 'react';

import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const useRepositories = () => {
  // const [repositories, setRepositories] = useState();
  
  
  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  const repositories = data ? data : {};

  return repositories;
};

export default useRepositories;

/*
useEffect(() => {
    const { data } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network'
    });
  }, [])
*/





