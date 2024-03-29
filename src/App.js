import './App.css';
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductPage from './pages/productPage/ProductPages';
import CartPage from './pages/cartPage/CartPage';
import FavPage from './pages/favPage/FavPage';
import PersonalPage from './pages/personalPage/PersonalPage';
import { useDispatch } from 'react-redux';
import {setOpenSidebar, setScreenSize} from './store/sidebarSlice';
import { useEffect, useState } from 'react';
import AdminIndex from './pages/AdminIndex/AdminIndex';
import MainPage from './pages/AdminIndex/mainPage/MainPage';
import Electronic from './pages/AdminIndex/electronic/Electronic';
import Phones from './pages/AdminIndex/phones/Phones';
import Mens from './pages/AdminIndex/mens/Mens';



function App() {


   /* get screen size */
   const dispatch = useDispatch();
   const [screenSize, getDimension] = useState({
     dynamicWidth: window.innerWidth,
   });
   const setDimension = () => {
     getDimension({
       dynamicWidth: window.innerWidth,
     });
   };
   useEffect(() => {
     window.addEventListener('resize', setDimension);
     screenSize.dynamicWidth <= 992
       ? dispatch(setOpenSidebar(false))
       : dispatch(setOpenSidebar(true));
     dispatch(setScreenSize(screenSize.dynamicWidth));
     return () => {
       window.removeEventListener('resize', setDimension);
     };
   }, [screenSize]);
   /*******************************************************/

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<ProductPage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/favorite' element={<FavPage />}/>
          <Route path='/personal' element={<PersonalPage />}/>
          <Route path='/admin'>
              <Route index  element={<AdminIndex />}/>
              <Route path='main'  element={<MainPage />}/>
              <Route path='electronic'  element={<Electronic />}/>
              <Route path='phones'  element={<Phones />}/>
              <Route path='mens'  element={<Mens />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
