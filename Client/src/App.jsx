import  Homepage from './Pages/Homepage/Homepage';
import {Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Login from './Pages/Loginpage/Loginpage';
import Navbar from './Components/Navbar/Navbar';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Registerpage from './Pages/Registerpage/Registerpage';
import Cartpage from './Pages/Homepage/Cartpage/Cartpage';
import { useAuthContext } from './Context/AuthContext';

export default function App() {
  const {user} = useAuthContext();
  return (
    // fragments:similar to div and if u have multiple elements u cn render inside the fragments or else u can use div
    <>
    <Navbar/>
    {/* Routes : Grouping Route */}
    <Routes>
      <Route path='/' element={< Homepage />}/>
      <Route path='/login' element={ user ? < Navigate to = "/" /> : <Login/>}/>
      <Route path ="/Cart" element={<Cartpage />}/>
      <Route path='/register' element={ user ? <Navigate to = "/" /> :< Registerpage/>}/>
      <Route path ="/product/:id" element={<ProductDetails />}/>
    </Routes>
    </>
  )
}
  
