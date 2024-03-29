

const BUTTON_TYPE_CLASSES ={
  google  : 'google-sign'
}

const Button = ({children}) =>{
  return <button className="button-container">{children}</button>
}

export default Button;