import { useContext ,Fragment} from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategorieContext } from '../../context/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategorieContext);

  return (
    <Fragment>
    {
      Object.keys(categoriesMap).map((title) => {
        <Fragment>
        <h2>{title}</h2>
        </Fragment>
      })
    }

    </Fragment>
  );
};

export default Shop;