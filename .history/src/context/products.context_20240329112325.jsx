import { createContext, useState,useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data';

export const CategorieContext = createContext({
  categoriesMap: [],
});

export const CategotieProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    const getCategoresMap = async()=>{
    const categoryMap = await getCategoriesAndDocuments();
    console.log(categoryMap);
      }
      getCategoresMap();
  },[]);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};