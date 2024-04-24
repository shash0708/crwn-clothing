// import { USER_ACTION_TYPES } from './user.types';
import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {
  currentUser: null,
  test: { a: 1 },
};

export  const  userSlice =createSlice({
 
     name :'user',
     initialState:INITIAL_STATE,
     reducers:{
      setCurrentUser(state,action) {
 
        state.currentUser= action.payload
      },
     },

});

// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      // return { ...state, currentUser: payload };
    // case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
    //   return { ...state, currentUser: null };
    // case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    // case USER_ACTION_TYPES.SIGN_IN_FAILED:
    // case USER_ACTION_TYPES.SIGN_UP_FAILED:
    //   return { ...state, error: payload };
  //   default:
  //     return state;
  // }


  export const {setCurrentUser} = userSlice.actions;

  export const userReducer = userSlice.reducer;