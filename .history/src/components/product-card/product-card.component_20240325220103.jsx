import './product-card.styles.scss';

import Button from '../button/button.component';
const ProductCard =({product})=>{
    const {name,price ,imageUrl} = product; 
    <div className='product-card-container'>
     
   <img/>
    <div className='footers'>
    
    <span className='name'>{nqme}</span>
    <span className='price'></span>
    </div>
    <Button buttonType='inverted'>Add to Card</Button>
    </div>

}


export default ProductCard;