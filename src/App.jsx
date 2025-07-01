import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home/Home';
import Cart from './Components/pages/Cart/Cart';
import PlaceOrder from './Components/pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

const App = () => {

  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
       <div className='app'>
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>

        </Routes>
      </div>
      <Footer/>
    </>
  )
}
export default App