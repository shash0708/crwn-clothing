import { ProductsContext } from '../../context/products.context';
import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

const Shop =() =>{
  const {products} = useContext(ProductsContext);
    return (
        <div>
        {products.map(({ product })=>(
          <ProductCard key={products.id}/>
        ))}
        </div>
    );
};

export default Shop; 