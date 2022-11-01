import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Add from './component/Add';
import Newentry from './component/Newentry';
import Profile from './component/Profile';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Update from './component/Update';
import crudform from './context/connct'


function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>

      <Routes>
    

      <Route path="/" element={<Add/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>      
      <Route path="/entry" element={<Newentry/>}/>      
      <Route path="/update/:id" element={<Update/>}/>      

      </Routes>
      
      
      
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
