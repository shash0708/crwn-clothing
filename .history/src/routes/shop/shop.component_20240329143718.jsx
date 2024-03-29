import { useContext ,Fragment} from 'react';
import CategoriesPreview from '../cateogries-preview/categories-preview.components';

import {Routes,Route}  from "react-router-dom";
import './shop.styles.scss';

const Shop = () => {

  return (
    <Routes>
     <Route index element={<CategoriesPreview/>} />
     <Route path="" element={<CategoriesPreview/>} />

    </Routes>
  );
};

export default Shop;