import { createContext,useState,useEffect,useReducer } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.util";
export const UserContext = createContext({
  currentUser:null,
  setCurrentUser:()=> null,
});

export const USER_ACTION_TYPES ={
  SET_CURRENT_USER:'SET_CURRENT_USER'
}

export const userReducer=(state,action)=>{
  const {type,payload}=action;
  console.log(action)
   switch(type){
    case  USER_ACTION_TYPES.SET_CURRENT_USER: return {
        ...state,
        currentUser:payload
      }
  
      default:
        throw new Error(`Undefined action type ${type} in user reducer`);
   }  
}

const INITIAL_STATE={
  currentUser:null,
}

export const UserProvider = ({children})=>{
    // const [currentUser, setCurrentUser] = useState(null);

const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE)

const setCurrentUser =(user)=>{
  dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user));
}


const value = {currentUser,setCurrentUser};
   

    useEffect(() => {
    const unsubscribe= onAuthStateChangedListener((user)=>{
  if(user){
    createUserDocumentFromAuth(user);
  }
      setCurrentUser(user);
    }); 

     return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

