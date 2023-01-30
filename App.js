import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Component/Navbar'
import Login from './Component/Login';
import Customer from './Component/Customer'
import Product from './Component/Product';
import ShoppingCart from './Component/ShoppingCart';
function App() {
  return (
    <> 
    <BrowserRouter>
    
       <Navbar/>
       <div className='container-fluid App'>
       <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/Customer' element={<Customer />}/>
        <Route exact path='/Product' element={<Product />}/> 
        <Route exact path='/Product/ShoppingCart' element={<ShoppingCart />}/>
       </Routes>
       </div>
       </BrowserRouter>
    </>

      );
}

export default App;
