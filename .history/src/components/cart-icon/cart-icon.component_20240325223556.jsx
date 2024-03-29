import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'


const CartIcon = () =>{
   
    return(
        <div className='cart-icon-container'>
        <ShoppingIcon cl/>
        <span></span>
        </div>
    )
}

export default CartIcon;