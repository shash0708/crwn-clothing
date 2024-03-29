import { useState } from "react";

const defaultformfield ={
   dis
}

const SignUpForm = () =>{

 const  [name, setName] = useState();

     return (
        <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={()=>{}}> 
        <label htmlFor="displayName">Display Name</label>
        <input type="text" id="displayName" required placeholder="Enter your display name"/>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required placeholder="Enter your email"/>
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required placeholder="Enter your password"/>
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" required placeholder="Confirm your password"/>
        <button  type="submit">Sign Up</button>

        </form>
        </div>
     );
} ;

export default SignUpForm;