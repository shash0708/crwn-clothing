import { createContext, useState } from "react";


import PRODUCTS  from '../shop-data.json';


export const ProductContext = createContext({
    products:[],

});


export const ProductsProvider =({children})=>{
    const [products,setProducts] = useState(P)
  return(
    <ProductContext.Provider value={}>{children}</ProductContext.Provider>
  )

}
