const SignUpForm = () =>{

     return (
        <div>
        <h1>Sign up with your email and password</h1>
        <form> 
        <label>Display Name</label>
          <input type="text" required />
          <label>Email</label>
          <input type="email"required />
           <label>Password</label>
          <input required /> 
          <label>Confirm Password</label>
          <input required /> 

        </form>
        </div>
     )
} 