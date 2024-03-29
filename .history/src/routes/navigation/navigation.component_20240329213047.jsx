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
  <div className="nav-links-container">
     <Link className="nav-link" to='/shop'>
     SHOP
     </Link>
  {
    currentUser ? (
      <span className="nav-link"  onClick={signOutUser}>
      {' '}
      SIGN-OUT{' '}
      </span>)
      :( <Link className="nav-link" to='/auth'>
        SIGN IN
        </Link>
        )
  }
  <CartIcon />

  </div>
  { isCartOpen && <CartDropdown/>}

</NavigationContainer>

  <Outlet/>
    </Fragment>
    )
  }


  export default Navigation;