import { useState } from 'react';

import FormInput from '../form-input/form-input-component';
import Button from '../button/button.component';


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

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
   
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
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
      <h2>Alr have an account?</h2>
      <span>Sign up with your email and password</span>
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


        <Button buttonType='inverted' type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignInForm;