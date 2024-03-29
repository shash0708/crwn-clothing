import { useContext } from 'react';
import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import { ShoppingIcon,CartIconContainer,itemCount}from './cart-icon.styles.jsx'
import { CartContext } from '../../context/cart.context';

const CartIcon = () =>{
   const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
   const tooggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer  onClick={tooggleIsCartOpen}>
        <ShoppingIcon />
        <span className='item-count'>{cartCount}</span>
        </CartIconContainer>
    )
}

export default CartIcon;