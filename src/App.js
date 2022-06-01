import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './components/Account/Account';
import './style/main.scss';
import MainPage from './views/MainPage//MainPage';
import ProductsPage from './views/ProductsPage/ProductsPage';


const  App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/products/:id/*' element={<ProductsPage/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
	  </>
  );
}


export default App;