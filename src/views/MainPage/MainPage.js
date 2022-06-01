import React from 'react';
import Footer from '../../components/Footer/Footer';
import ProductCards from '../../components/Products/Products';
import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search';
// import FiltersByPrice from '../../components/Filters/FiltersByPrice';
const MainPage = () => {
    
    return (
        <>
            <div className="container">
                <div className='main'>
                    <Header/>
                    <main className='main__inner'>
                        <div className='main__left'>
                            <Search/>
                            {/* <FiltersByPrice/> */}
                        </div>
                        <div className="main__right">
                            <Filters/>
                            <ProductCards/>
                        </div>
                    </main>
		            <Footer/> 
                </div>
            </div>
        </>
        );
}


export default MainPage;