// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { initializeFirestore, doc, getDoc, setDoc ,  collection,
  writeBatch,query,getDocs} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd3wP3uum3KKNZGT2vqcqVFEdrqQS3jUs",
  authDomain: "ontako-auth.firebaseapp.com",
  projectId: "ontako-auth",
  storageBucket: "ontako-auth.appspot.com",
  messagingSenderId: "546126126170",
  appId: "1:546126126170:web:f2529e5e56c4f2df60cc63"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
});
const provider = new GoogleAuthProvider();




provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, provider);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userSnapshot;
};

export const addCollectionAndDocument = async(collectionKey,objectsToAdd)=>{
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) =>{
    const documentRef=doc(collectionRef, obj.title.toLowerCase());
    batch.set(documentRef,obj);
  });
  await  batch.commit()
   .then(()=>console.log("all data added"))
   .catch((error)=> console.log(error))

}

export const getCategoriesAndDocuments = async(label) =>{
 const collectionRef = collection(db,label);
 const querySnapshot =await getDocs(query(collectionRef));
 return querySnapshot.docs.map(docSnapShot=>docSnapShot.data());

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async()=> await  signOut(auth);


export const onAuthStateChangedListener =(callback) => onAuthStateChanged(auth,callback);

export const getCurrentUser =()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth)=>{
          unsubscribe();
          resolve(userAuth);
      },
      reject
    );
  });
};
