import React from "react"
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'



const SignIn =()=>{

  const logGoogleUser = async ()=>{
    const response =  await signInWithGooglePopup();
    crea(response); 
  }


    return (
        
           <div>
           <h1>Sign In Page</h1>
           <button onClick={logGoogleUser}>Log in with Google</button>

           </div>
    );
};

export default SignIn;