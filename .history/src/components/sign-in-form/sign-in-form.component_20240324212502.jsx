import { useState,useContext } from 'react';

import FormInput from '../form-input/form-input-component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';
import { signInWithGooglePopup,createUserDocumentFromAuth ,signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import './sign-in-form.style.scss'

const defaultFormFields = {
 
  email: '',
  password: '',
  
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password} = formFields;
  
  const {setCurrentUser} = useContext(UserContext) 

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
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);
      
      setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      switch(error.code){
          case  'auth/wrong-password':
            alert('Inavalid Credentials');
            break;
            case 'auth/user-not-found':
              alert('Please Register  first!');
              break;
        default:
          console.log(error);
      }
      //      if (error.code === 'auth/wrong-password') {
     
      // } else if (error.code === "auth/user-not-found"){
      //   console.log('user creation encountered an error', error);
      // }
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
        <Button type="button" buttonType='google' onClick={signInGoogleUser}>Google Sign In</Button>
        </div>
        </form>
    </div>
  );
};

export default SignInForm;