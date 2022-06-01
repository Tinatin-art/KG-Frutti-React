import React from 'react'
import ProductsDetail from '../../components/Products/ProductsDetail';
import Comments from '../../components/Comments/Comments';
import Tabs from '../../components/Tabs/Tabs';
import { Outlet, Route, Routes } from 'react-router-dom';
import ProductDescription from '../../components/Products/ProductDescription';
import ProductFeature from '../../components/Products/ProductFeature';
import ProductsDeliveryTerms from '../../components/Products/ProductsDeliveryTerms';
import ProductsRecommend from '../../components/Products/ProductsRecommend';
const ProductsPage = () => {


  
  return (
    <div className="container">
        <div className='detail'>
            <div className='detail__up'>
                <ProductsDetail/>
            </div>
            <Tabs/>
            <div className='detail__down'>
                <Routes>
                    <Route index element={<ProductDescription/>}/>
                    <Route path={`description`} element={<ProductDescription/>}/>
                    <Route path={`feature`} element={<ProductFeature/>}/>
                    <Route path={`comments`} element={<Comments/>}/>
                    <Route path={`delivery-terms`} element={<ProductsDeliveryTerms/>}/>
                </Routes>
                <Outlet/>
            </div>
            <div className='delivery-recommend'>
                <ProductsRecommend/>
            </div>
        </div>
    </div>  
  )
};

export default ProductsPage;