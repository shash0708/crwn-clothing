import { useContext } from 'react';
import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import { CartContext } from '../../context/cart.context';

const CartIcon = () =>{
   const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
   const tooggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container'  onClick={tooggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{</span>
        </div>
    )
}

export default CartIcon;