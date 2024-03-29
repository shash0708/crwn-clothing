import CategoryItem from "../category-item.component"

const Directory = ({categories}) =>{

return (
    <div className="categories-container">
      {categories.map((cate{gory) => {
        <CategoryItem key={category.id} category={category}/>
      })}
    </div>
)

}