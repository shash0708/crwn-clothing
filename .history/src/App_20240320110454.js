import { Routes,Route } from 'react-router-dom';
import Home from './routes/home/home.component';
const App=()=> {
        return(
          <Routes>
          <Route path='/'el/>
          <Home />
          </Routes>
          
          );
}

export default App;