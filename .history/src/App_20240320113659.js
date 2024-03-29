import { Routes,Route,Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';

const Navigation =()=>{
  <div>
<div>
<h1></h1>
</div>
  </div>
}

const App=()=> {
        return(
          <Routes>
          <Route path='/ ' element={N}>
          <Route path='/'element={<Home/>}/>
          </Route>
          </Routes>
          
          );
}

export default App;
