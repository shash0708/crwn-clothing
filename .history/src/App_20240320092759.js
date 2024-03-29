import './App.css';
import './categories.style.scss'
const App=()=> {

  const categories =[
    {
      id:1,
      title:'Hats',
    },
    {
      id:2,
      title:'Jackets',
    },
    {
      id:3,
      title:'Sneakers',
    },
    {
      id:4,
      title:'Womans',
    },
    {
      id:5,
      title:'Mens',
    },
  ];
  return (
    <div className='categories-container'>
    {categories.map(({title,id})=>(
    <div  className='category-container'>
    <div className='background-image'/>
    <div  key={id} className='category-body-container'>
    <h2>{title}</h2>
    <p>Shop Now</p>
    </div>
    </div>
    ))}
  


    </div>
  );
}

export default App;