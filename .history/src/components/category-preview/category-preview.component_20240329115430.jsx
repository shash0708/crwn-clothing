import './category-preview.styles.scss'

const CategoryPreview = ({title,products})=>{

    return (
        <div className='category-preview-container'>
        <h2>
        <span className='title'>{title.toUpperCae()}</span>
        </h2>
        <div className='preview'>
        {
            products.filter((_,idx,)=>{
                
            })
        }
        </div>
        </div>
    )

}

export default CategoryPreview;