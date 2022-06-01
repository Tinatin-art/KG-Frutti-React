import React from 'react'
import pear from "../../assets/images/pear.jpg"


const ProductsRecommendItem = ({item}) => {
  

    return ( 
            <div className="products__item">
                <img className='products__item-image' src={pear} alt="products"/>
                <div className='products__item-content'>
                    <span className='products__item-title'>{item.name}</span>
                    <p>{item.description}</p>
                    <div>
                        <span className='price-ttl'>Price</span>
                        <span className='price-new'>{item.priceNew}{item.currency}</span>
                        <span className='price'><strike>{item.price}{item.currency}</strike></span>
                    </div>
                    <div >
                        <span className='weight-ttl'>Weight:</span>
                        <span className='weight'>{item.weight}</span>
                    </div>
                </div>
            </div>
        )
  
}

export default ProductsRecommendItem