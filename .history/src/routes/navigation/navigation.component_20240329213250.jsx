import { Fragment,useContext } from "react";
import { Outlet,Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer,NavLink,NavLinks,LogoContainer} from './navigation.styles.jsx' 
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation =()=>{
  const {currentUser,setCurrentUser} = useContext(UserContext);
  const {isCartOpen,setIsCartOpen} = useContext(CartContext);
      return (
    <Fragment>  

<NavigationContainer>
<LogoContainer to='/'>
  <CrownLogo className='logo'/>
  </LogoContainer>
  <NavLinks>
     <NavLink to='/shop'>
     SHOP
     </NavLink>
  {
    currentUser ? (
      <Ns className="nav-link"  onClick={signOutUser}>
      
      SIGN-OUT
      </Ns>)
      :( <NavLink to='/auth'>
        SIGN IN
        </NavLink>
        )
  }
  <CartIcon />

  </NavLinks>
  { isCartOpen && <CartDropdown/>}

</NavigationContainer>

  <Outlet/>
    </Fragment>
    )
  }


  export default Navigation;