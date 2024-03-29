import './category-preview.styles.scss'
import Produc
const CategoryPreview = ({title,products})=>{

    return (
        <div className='category-preview-container'>
        <h2>
        <span className='title'>{title.toUpperCae()}</span>
        </h2>
        <div className='preview'>
        {
            products.filter((_,idx)=> idx< 4)
            .map(product => <img key

            })
        }
        </div>
        </div>
    )

}

export default CategoryPreview;