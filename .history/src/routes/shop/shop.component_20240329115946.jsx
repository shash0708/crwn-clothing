import { useContext ,Fragment} from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategorieContext } from '../../context/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategorieContext);

  return (
    <div c>
    {
      Object.keys(categoriesMap).map((title) => 
      (  <Fragment key={title}>
        <h2>{title}</h2>
        <div className='products-container'>
        {categoriesMap[title].map((product) => (
          <CategoryPreview key={product.id} product={product} />
        ))}
      </div>
        </Fragment>)
      )
    }

    </div>
  );
};

export default Shop;