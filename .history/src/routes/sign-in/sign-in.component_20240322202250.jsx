import React from "react"
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils.js'

const SignIn =()=>{

  const logGoogleUser = async ()=>{
    const response =  await signInWithGooglePopup();
    console.log(response) 
  }


    return (
        
           <div>
           <h1>Sign In Page</h1>
           </div>
    );
};

export default SignIn;