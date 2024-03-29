// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp} from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore,
  doc,
  getDoc,
  setDoc
}

from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

let app;

// Initialize Firebase
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
     
     prompt:"select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore(app);
 
export const createUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef=  doc(db,"users",userAuth.uid);

  console.log(userDocRef);

 const usersnapshot =  await getDoc(userDocRef);
 console.log(usersnapshot);   
 if (!usersnapshot.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
    });
  } catch (error) {
    console.log('error creating the user', error.message);
  }
}

return userDocRef;
}