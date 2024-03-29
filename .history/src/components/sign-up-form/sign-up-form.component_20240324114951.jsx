import { useState } from "react";

const defaultformfield ={
   displayName:'',
   email:'',
   password:'',
   confirmPassword:''
}

const SignUpForm = () =>{
const [formFields,setformFields] = useState(defaultformfield)
 const  [displayName,email,password,confirmPassword] = formFields;
 const handleChange = (event)=>{
const {name} = event;
 };

     return (
        <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={()=>{}}> 
        <label htmlFor="displayName">Display Name</label>
        <input type="text" id="displayName" required placeholder="Enter your display name" 
        name=""
        onChange={handleChange}
        value={"abc"}
        />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required placeholder="Enter your email"
        onChange={handleChange}
        />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required placeholder="Enter your password"
        onChange={handleChange}
        />
        
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" required placeholder="Confirm your password"
        onChange={handleChange}
        />
        <button  type="submit">Sign Up</button>

        </form>
        </div>
     );
} ;

export default SignUpForm;