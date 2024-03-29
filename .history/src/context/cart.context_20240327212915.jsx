import {createContext, useState} from 'react';


const addCartItem = (cartItems,productToAdd)=>{

const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)


if(existingCartItem){
    return [...cartItems].map((item)=>( 
        item.id===existingCartItem.id ?{...item, quantity: item.quantity +1}:item
    ))
   }else{
       productToAdd.quantity=1;
       return [ ...cartItems , productTo                                Add]
   }
};

return [...cartItems,{...productToAdd,quantity:1}];
};

export const CartContext = createContext({
    isCartOpen :false,
    setIsCartOpen :() =>{},
    cartItem:[],
    addItemToCart :()=>{}
});



export const CartProvider = ({children}) =>{
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);


  const addItemToCart =(productToAdd) =>{
  setCartItems(addCartItem(cartItems, productToAdd))
  } 

  const value = {isCartOpen,setIsCartOpen};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>


}