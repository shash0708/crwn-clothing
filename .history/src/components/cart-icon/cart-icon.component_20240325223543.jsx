import { ReactComponent as  ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'


const CartIcon = () =>{
   
    return(
        <div className=''>
        <ShoppingIcon/>
        <span></span>
        </div>
    )
}

export default CartIcon;