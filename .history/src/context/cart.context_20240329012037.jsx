import {createContext, useState,useEffect} from 'react';


const addCartItem = (cartItems,productToAdd)=>{

const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)


if(existingCartItem){
    return cartItems.map((item)=>
        item.id===existingCartItem.id ?{...item, quantity: item.quantity +1}:item
    )
};

return [...cartItems,{...productToAdd,quantity:1}];
};

export const CartContext = createContext({
    isCartOpen :false,
    setIsCartOpen :() =>{},
    cartItem:[],
    addItemToCart :()=>{},
    cartCount:0
});



export const CartProvider = ({children}) =>{
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);
const [cartCount,setCartCount] = useState(0);


useEffect(()=>{
  const newCartCOunt = cartItems.reduce((total,cartItem)=>total +cartItem.quantity,
    0
    );
    setCartCount(newCartCOunt)

},[cartItems])

  const addItemToCart =(productToAdd) =>{
  setCartItems(addCartItem(cartItems, productToAdd))
  } 

  const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>


}