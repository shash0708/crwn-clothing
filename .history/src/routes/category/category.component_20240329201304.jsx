import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import { CategorieContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = ()=>{

   const {category} = useParams();
   const {categoriesMap} = useContext(CategorieContext);
   const [products,setproducts]= useState(categoriesMap[category]);

   useEffect(()=>{
    setproducts(categoriesMap[category]);

   },[category,categoriesMap]);

   return (
    <div className='category-container'>
    <h1 className=''>{title}</h1>
    { products &&
        products.map((product)=> <ProductCard key={product.id} product={product}/>)
    }
    </div>
   )

}

export default Category;