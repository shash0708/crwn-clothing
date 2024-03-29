import { useContext } from 'react';
E }from './cart-dropdown.styles.jsx'
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
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
             
{
    cartItems.length ? (cartItems.map((item)=>(
        <CartItem key={item.id} cartItem={item}/>
     ))) :(
        <span>Your cart is empty</span>
     )
    
    }
  
        </div>
        
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}


export default CartDropdown;