import { useContext ,Fragment} from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategorieContext } from '../../context/categories.context';

import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategorieContext);

  return (
    <div className='category-preview-container'>
    {
      Object.keys(categoriesMap).map((title) =>{
        const products = categoriesMap[title];
        return(
            
        )      } 
     )}
      
    </div>
  );
};

export default CategoriesPreview;