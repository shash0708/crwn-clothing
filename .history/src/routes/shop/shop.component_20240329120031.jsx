import { useContext ,Fragment} from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategorieContext } from '../../context/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategorieContext);

  return (
    <div className='shop-container'>
    {
      Object.keys(categoriesMap).map((title) =>{
        
      } 
     )}
      </div>
        </Fragment>)
      )
    }

    </div>
  );
};

export default Shop;