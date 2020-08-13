import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const useAuthorization = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });
  
  return { data };
};

export default useAuthorization;