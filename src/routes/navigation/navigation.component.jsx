import { Fragment,useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import{useSelector,useDispatch} from 'react-redux'
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { signOutStart } from "../../store/user/user.action.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {NavigationContainer,NavLink,NavLinks,LogoContainer} from './navigation.styles.jsx' 
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation =()=>{
  const dispatch = useDispatch();
  const currentUser =  useSelector(selectCurrentUser)
   const isCartOpen = useSelector(selectIsCartOpen);

   const signOutUser = ()=>dispatch(signOutStart());
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
      <NavLink as='span' onClick={signOutUser}>
      
      SIGN-OUT
      </NavLink>)
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