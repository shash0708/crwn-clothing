import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import { CategorieContext } from '../../context/categories.context';

const Category = ()=>{

   const {category} = useParams();
   const {categoriesMap} = useContext(CategorieContext);
   const products= categoriesMap[category];

}

export default Category;