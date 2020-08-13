import { useMutation } from '@apollo/react-hooks';
import { CREATE_NEW_USER } from '../graphql/mutations';


const useSignUp = () => {

  const [createUser] = useMutation(CREATE_NEW_USER);
  
  const signUp = async ({ username, password }) => {
    
    const { data } = await createUser({ variables: { username, password } })
       
    return data;
  };

  return [signUp];
};

export default useSignUp;

