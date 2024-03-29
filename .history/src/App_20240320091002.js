import './App.css';

const App=()=> {

  const categories =[
    {
      id:1,
      title:'Hats',
    },
    {
      id:2,
      title:'Hats',
    },
    {
      id:3,
      title:'Hats',
    },
    {
      id:4,
      title:'Hats',
    },
    {
      id:5,
      title:'Hats',
    },
  ];
  return (
    <div className='categories-container'>
    {categories.map(({title})=>(
    <div className='category-container'>
    <div className='category-body-container'>
    <h2>{title}</h2>
    <p>Shop Now</p>
    </div>
    </div>
    ))}
  


    </div>
  );
}

export default App;
