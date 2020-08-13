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

import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native'
import AuthStorageContext from '../context/AuthStorageContext';
import { useApolloClient } from '@apollo/react-hooks';
import { useContext } from 'react';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 6 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(0, 'Password must at least 6 characters')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')],'Passwords do not match')
    .required('Password confirm is required')
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      const data = await signIn({ username, password });
      console.log('sign in data ', data);
      await authStorage.setAccessToken(data);
      apolloClient.resetStore();
      history.push('/repositories');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        passwordConfirm: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}


const SignUpForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput
        name='username'
        placeholder='username'
        testID='signupUsernameField'
      />
      <FormikTextInput
        name='password'
        placeholder='password'
        testID='signUpPasswordField'
      />
      <FormikTextInput
        name='passwordConfirm'
        placeholder='confirm password'
        testID='passwordConfirmField'
      />
      <TouchableWithoutFeedback
        onPress={onSubmit}
        testID='signUpSubmitButton'
      >
        <View style={styles.submitButton}>
          <Text
            style={{ color: 'white' }}
            fontSize='subheading'
          >
            Sign up
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View >
  )
}

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

export default SignUp
