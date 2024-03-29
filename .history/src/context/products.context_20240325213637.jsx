import { createContext, useState } from "react";


import PRODUCTS  from '../shop-data.json';


export const ProductxContext = createContext({
    products:[],

});


export const ProductsProvider =({children})=>{
    const [products,setProducts] = useState(PRODUCTS);
    const value = {products}
  return(
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )

}
