import SHOP_DATA from '../../shop-data.json'


const Shop =() =>{
  
    return (
        <div>
        {SHOP_DATA.map(p)}
        </div>
    )


}