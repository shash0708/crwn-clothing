import React from "react"
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'



const SignIn =()=>{

  const logGoogleUser = async ()=>{
    const {response} =  await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }


    return (
        
           <div>
           <h1>Sign In Page</h1>
           <button onClick={logGoogleUser}>Log in with Google</button>

           </div>
    );
};

export default SignIn;