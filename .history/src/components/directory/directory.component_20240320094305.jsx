import CategoryItem from "../category-item.component"

const Directory = ({categories}) =>{

return (
    <div className="categories-container">
      {categories.map((category)=>{
        <CategoryItem key={category.id} category={}
      })}
    </div>
)

}