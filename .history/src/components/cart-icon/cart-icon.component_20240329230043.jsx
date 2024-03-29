import { useContext } from 'react';
import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import { ShoppingIcon,}from './cart-icon.styles.jsx'
import { CartContext } from '../../context/cart.context';

const CartIcon = () =>{
   const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
   const tooggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container'  onClick={tooggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;