import { useContext } from 'react';
import { ShoppingIcon,CartIconContainer,ItemCount}from './cart-icon.styles.jsx'
import { CartContext } from '../../context/cart.context';
import {useDispatch,useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.reducer.js';
import { selectCartCount,selectIsCartOpen } from '../../store/cart/cart.selector.js';
const CartIcon = () =>{
    const dispatch = useDispatch();
    const cartCount  = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen)
const tooggleIsCartOpen = ()=>dispatch(setIsCartOpen(!isCartOpen));
    return(
        <CartIconContainer  onClick={tooggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;