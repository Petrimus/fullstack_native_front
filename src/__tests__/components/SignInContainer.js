import React from 'react';
import { render, fireEvent, act, wait } from '@testing-library/react-native';

import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const handleSubmit = (values) => {
        // console.log('handle submit called');
        const { username, password } = values;
        onSubmit({ username, password});
      }

      // const handleSubmit = () => console.log('pressed')      
     
      const { debug, getByTestId, findByTestId } = render(
        <SignInContainer onSubmit={handleSubmit} />
      )

      const button = await findByTestId('submitButton');
      // console.log('button', button)

      await act(async () => {
        fireEvent.changeText(getByTestId('usernameField'), 'kalle');
        fireEvent.changeText(getByTestId('passwordField'), 'password');
        fireEvent.press(button);
        // fireEvent.press(getByTestId('submitButton'));
      })
      // fireEvent.press(button);
      debug();

      await wait(() => {
        // expect(getByTestId('submitButton')).toHaveTextContent('Submit');
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});