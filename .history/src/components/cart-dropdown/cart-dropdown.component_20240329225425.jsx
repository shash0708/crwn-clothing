import { useContext } from 'react';
import {CartDropdownContainer,EmptyMessage,CartItems }from './cart-dropdown.styles.jsx'
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from  '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
const CartDropdown =()=>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler =()=>{
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
        <C>
             
{
    cartItems.length ? (cartItems.map((item)=>(
        <CartItem key={item.id} cartItem={item}/>
     ))) :(
        <EmptyMessage>Your cart is empty</EmptyMessage>
     )
    
    }
  
        </C>
        
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}


export default CartDropdown;