import { useState } from 'react';

import FormInput from '../form-input/form-input-component';
import Button from '../button/button.component';

import { signInWithGooglePopup,createUserDocumentFromAuth ,signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import './sign-in-form.style.scss'

const defaultFormFields = {
 
  email: '',
  password: '',
  
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
     await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await signInAuthUserWithEmailAndPassword(email,password);
     console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>already have an account?</h2>
      <span>Sign in with your email and password.</span>
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

<div className='buttonContainer'>
        <Button buttonType='inverted' type="submit">Sign In</Button>
        <Button buttonType='google' type="submit" onClick={signInGoogleUser}>Google Sign In</Button>
        </div>
        </form>
    </div>
  );
};

export default SignInForm;