import { useContext } from 'react';
import './cart-dropdown.styles.scss'
import { CartContext } from '../../context/cart.context';
import Button from  '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
const CartDropdown =()=>{
    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {/* <CartItem /> */}
        </div>
        
        <Button>GO TO CHECKOUT</Button>
        </div>
    )
}


export default CartDropdown;