import { useContext } from 'react';
import { ShoppingIcon,CartIconContainer,itemCount}from './cart-icon.styles.jsx'
import { CartContext } from '../../context/cart.context';

const CartIcon = () =>{
   const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
   const tooggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer  onClick={tooggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <itemCount className='item-count'>{cartCount}</itemCount>
        </CartIconContainer>
    )
}

export default CartIcon;