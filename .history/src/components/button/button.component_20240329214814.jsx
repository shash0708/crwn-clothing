import {BaseButton,GoogleSignInButton,InvertedButton}from './button.styles.jsx'
const BUTTON_TYPE_CLASSES ={
  base:'base',
  google  : 'google-sign-in',
  inverted:'inverted'
}

const getButton = (buttonType=BUTTON_TYPE_CLASSES.base)

const Button = ({children,buttonType,...otherProps}) =>{
return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}` } {...otherProps}>{children}</button>
}

export default Button;