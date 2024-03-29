import SHOP_DATA from '../../shop-data.json'


const Shop =() =>{
  
    return (
        <div>
        {SHOP_DATA.map(({id,name})=>(
          <div key={id}>
          <h1></h1>
          </div>
        ))}
        </div>
    )


}