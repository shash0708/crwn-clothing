

const BUTTON_TYPE_CLASSES ={
  google  : 'google-sign-in',
  inverted:'inverted'
}

const Button = ({children}) =>{
return <button className={`button-container${BUTTON_TYPE_CLASSES[]}` }>{children}</button>
}

export default Button;