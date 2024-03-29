import { useContext ,Fragment} from 'react';


import {Routes,Route}  from "react-router-dom";
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategorieContext);

  return (
    <Routes>
     <Route index element={ } />
    </Routes>
  );
};

export default Shop;