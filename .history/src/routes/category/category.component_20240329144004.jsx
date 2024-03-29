import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';


const Category = ()=>{

   const {category} = useParams();
   const {categoriesMap} = useContext();
}

export default Category;