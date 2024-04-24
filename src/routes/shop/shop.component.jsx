import { useEffect } from "react";
import CategoriesPreview from "../cateogries-preview/categories-preview.components";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from '../../store/categories/category.reducer';
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
