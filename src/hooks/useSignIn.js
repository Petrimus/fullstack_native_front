import { useMutation } from '@apollo/react-hooks';
import { GET_AUTHORIZATION_TOKEN } from '../graphql/mutations';

const useSignIn = () => { 

  const [authorizeToken, result] = useMutation(GET_AUTHORIZATION_TOKEN);
  // console.log(authorizeToken)


  const signIn = async ({ username, password }) => {
    const { data } = await authorizeToken({ variables: { username, password } })   
    return data;
  };

  return [signIn, result];
};

export default useSignIn;

