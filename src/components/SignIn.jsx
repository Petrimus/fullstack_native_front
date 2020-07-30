import React from 'react';
import {
  View,
  StyleSheet, 
  TouchableWithoutFeedback
} from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { Formik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native'
import AuthStorageContext from '../context/AuthStorageContext';
import { useApolloClient } from '@apollo/react-hooks';
import { useContext } from 'react';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(0, 'Username must be at least 6 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(0, 'Password must at least 6 characters')
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  // console.log('sign in ', signIn)

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      // console.log('sign in data ', data);
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      history.push('/repositories');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />
};

export const SignInContainer = ({ onSubmit }) => {

  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignInForm = ({ onSubmit }) => {
  // console.log('on submit', onSubmit)
  return (
    <View style={styles.container}>
      <FormikTextInput
        name='username'
        placeholder='username'
        testID='usernameField'
      />
      <FormikTextInput
        name='password'
        placeholder='password'
        testID='passwordField'
      />

      <TouchableWithoutFeedback
        onPress={onSubmit}
        testID='submitButton'
      >
        <View style={styles.submitButton}>
          <Text
            style={{ color: 'white' }}
            fontSize='subheading'
          >Submit</Text>
        </View>
      </TouchableWithoutFeedback>
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  submitButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(158, 150, 150, .5)',
    borderRadius: 3,
    backgroundColor: 'blue',
  }
});

export default SignIn;