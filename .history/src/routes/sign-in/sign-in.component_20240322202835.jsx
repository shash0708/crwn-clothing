import React from "react"
import {sigInWithGooglePopup} from '../../utils/firebase/firebase.utils'

const SignIn =()=>{

  const logGoogleUser = async ()=>{
    const response =  await sigInWithGooglePopup();
    console.log(response); 
  }


    return (
        
           <div>
           <h1>Sign In Page</h1>
           <button onClick={logGoogleUser}>Log in with Google</button>

           </div>
    );
};

export default SignIn;