import { createContext, useState,useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    const getCategoresMap = async()=>{
    const categoryMap = await getCategoriesAndDocuments();
    console.log(categoryMap)
    }
  })

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};