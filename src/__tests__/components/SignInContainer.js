import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const handleSubmit = (values) => {
        // console.log('handle submit called');
        const { username, password } = values;
        onSubmit({ username, password });
      }

      // const handleSubmit = () => console.log('pressed')      

      const { debug, getByTestId } = render(
        <SignInContainer onSubmit={handleSubmit} />
      )

     

      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));
      
      debug();

      await waitFor(() => {
        expect(getByTestId('submitButton')).toHaveTextContent('Submit');
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});

/*
const onSubmit = jest.fn();

const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

fireEvent.changeText(getByTestId('usernameField'), 'kalle');
fireEvent.changeText(getByTestId('passwordField'), 'password');

fireEvent.press(getByTestId('submitButton'));

await waitFor(() => {
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
*/