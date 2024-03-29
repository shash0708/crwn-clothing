import { useContext } from 'react';
import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import { ShoppingIcon,CartIconContainer,itemCount}from './cart-icon.styles.jsx'
import { CartContext } from '../../context/cart.context';

const CartIcon = () =>{
   const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
   const tooggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer  onClick={tooggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <i className='item-count'>{cartCount}</i>
        </CartIconContainer>
    )
}

export default CartIcon;