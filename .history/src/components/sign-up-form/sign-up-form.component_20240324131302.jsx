import { useState } from "react";

import {cre}
const defaultformfield ={
   displayName:'',
   email:'',
   password:'',
   confirmPassword:''
}

const SignUpForm = () =>{
const [formFields,setformFields] = useState(defaultformfield)
 const  {displayName,email,password,confirmPassword}= formFields;
 const handleChange = (event)=>{
const {name,value} = event.target;
setformFields({...formFields ,[name]: value});
 };

     return (
        <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={()=>{}}> 
        <label htmlFor="displayName">Display Name</label>
        <input type="text" id="displayName" required placeholder="Enter your display name" 
        name="displayName" 
        onChange={handleChange}
        value={displayName}
        />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required placeholder="Enter your email"
       name="email"
        onChange={handleChange}
        value={email}
        />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required placeholder="Enter your password"
        name="password"
        onChange={handleChange}
        value={password}
        />
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" required placeholder="Confirm your password"
        name="confirmpassword"
        onChange={handleChange}
        value={confirmPassword}
        />
        <button  type="submit">Sign Up</button>

        </form>
        </div>
     );
} ;

export default SignUpForm;