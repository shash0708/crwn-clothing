import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home=()=> {


  return ( 
    <div>
  <Directory categories={categories}/>
  </div>
  );
};

export default Home;
