import {useContext}  from 'react'

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';



const Checkout = ({cartItem}) => {
const {cartItems} = useContext(CartContext);

  return (
    <div>
      <h1>nfj</h1>
<div>
{
  cartItems.map((cartItem)=>{
    return <div ley={id}>  
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>

  })
}
</div>
    </div>
  )
}

export default Checkout;
