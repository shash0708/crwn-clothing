import { useState } from "react";
import FormInput from '.../form-FormInput/form-FormInput-component'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const defaultformfield ={
   displayName:'',
   email:'',
   password:'',
   confirmPassword:''
}

const SignUpForm = () =>{
const [formFields,setformFields] = useState(defaultformfield)
 const  {displayName,email,password,confirmPassword}= formFields;

 const handleSubmit = async(event)=>{
   
     event.preventDefault();
  
     if(password !==  confirmPassword){
     
        alert("Passwords do not match");
        return;
    }

   try {
    const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password, 
    );
   
    await createUserDocumentFromAuth(user,{displayName});

    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
 
             alert('Cannot create user,email already in use');
        }    else{
            console.log('user creation encounterd an error',error);

    }
   }

 };

 const handleChange = (event)=>{
const {name,value} = event.target;
setformFields({...formFields ,[name]: value});
 };

     return (
        <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}> 
        <FormInput type="text" id="displayName" required placeholder="Enter your display name" 
        name="displayName" 
        onChange={handleChange}
        value={displayName}
        />
        
        <FormInput type="email" id="email" required placeholder="Enter your email"
       name="email"
        onChange={handleChange}
        value={email}
        />
        
        <FormInput type="password" id="password" required placeholder="Enter your password"
        name="password"
        onChange={handleChange}
        value={password}
        />
        
        <FormInput type="password" id="confirmPassword" required placeholder="Confirm your password"
        name="confirmPassword"
        onChange={handleChange}
        value={confirmPassword}
        />
        <button  type="submit">Sign Up</button>

        </form>
        </div>
     );
} ;

export default SignUpForm;