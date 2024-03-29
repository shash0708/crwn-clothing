import { createContext, useState,useEffect } from 'react';
import { addCollectionAndDocument } from '../utils/firebase/firebase.utils';

import SHOP_DATA from '../shop-data';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  useEffect
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};