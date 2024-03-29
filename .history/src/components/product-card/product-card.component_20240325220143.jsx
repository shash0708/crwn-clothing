import './product-card.styles.scss';

import Button from '../button/button.component';
const ProductCard =({product})=>{
    const {name,price ,imageUrl} = product; 
    <div className='product-card-container'>
     
   <img src={imageUrl} alt=  />
    <div className='footers'>
    
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    </div>
    <Button buttonType='inverted'>Add to Card</Button>
    </div>

}


export default ProductCard;