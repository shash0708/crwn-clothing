import './cart-item.styles.scss'

const CartItem = ({cartItem})=>{
    const {name} = cartItem;
    return (
        <div>
        <h1>{name}</h1>
        </div>
    )
}

export default CartItem;