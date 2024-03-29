import {useContext}  from 'react'

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';



const Checkout = () => {
const {cartItems,addItemToCart} = useContext(CartContext);
console.log(cartItems);

  return (
    <div>
      <h1>nfj</h1>
<div>
{
  cartItems.map((cartItem)=>{
    const {id,name,quantity} = cartItem;
    return( 
      <div key={id}>  
      <h2>{name}</h2>
      <span>{quantity}</span>
      <span onClick={()=>addItemToCart(cartItem)}>Inc</span>
    </div>
    );

  })
}
</div>
    </div>
  )
}

export default Checkout;
