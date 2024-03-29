import { createContext, useState,useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data';

export const CategorieContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});


  useEffect(()=>{
    const getCategoresMap = async()=>{
    const categoryMap = await getCategoriesAndDocuments();
    console.log(categoryMap);
      }
      getCategoresMap();
  },[]);

  const value = { categoriesMap };
  return (Context.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};