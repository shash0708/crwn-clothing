import { Routes,Route,Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';

const Navigation =()=>{
  <div>
<div>
<h1>I am the navigiation bar</h1>
</div>
<Outlet/>
  </div>
}

const App=()=> {
        return(
          <Routes>
          <Route path='/' element={<Navigation/>}>
          <Route path='/'element={<Home/>}/>
          </Route>
          </Routes>
          
          );
}

export default App;