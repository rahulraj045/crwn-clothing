import { useState } from 'react';

import FormInput from '../form-input/form-input.components';
import CustomButton, {BUTTON_TYPES} from '../custom-button/custom-button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            buttonType={BUTTON_TYPES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;