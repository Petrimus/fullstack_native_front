import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const useAuthorization = () => {
  // const [repositories, setRepositories] = useState();
  
  
  const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });
 
  return data, loading;
};

export default useAuthorization;