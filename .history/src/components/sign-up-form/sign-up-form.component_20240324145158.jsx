import { useState } from "react";
import FormInput from "../form-input/form-input-component";
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
        <FormInput 
        inputOptions={{type:"text", required:true,
        label:'Display Name",
        name:'displayName' ,
        onChange:handleChange,
        value:displayName,
    }}
        />
        
     
        <button  type="submit">Sign Up</button>

        </form>
        </div>
     );
} ;

export default SignUpForm;