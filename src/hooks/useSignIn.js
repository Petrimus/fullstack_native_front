import { useMutation } from '@apollo/react-hooks';
import { GET_AUTHORIZATION_TOKEN } from '../graphql/mutations';

const useSignIn = () => {

  const [authorizeToken] = useMutation(GET_AUTHORIZATION_TOKEN);
  
  const signIn = async ({ username, password }) => {
    
    const { data } = await authorizeToken({ variables: { username, password } })
    // console.log('data', data.authorize.accessToken)
    
    return data.authorize.accessToken;
  };

  return [signIn];
};

export default useSignIn;

