import React, {useEffect} from 'react'
import ProductsRecommendItem from './ProductsRecommendItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProductRecommend } from '../../actions/productsAction';

const ProductsRecommend = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProductRecommend())

    }, [dispatch])

    const {productsRecommend} = useSelector(state => state.products)

    return  (
        <>
            <h2>Похожие товары</h2>
            <div className="products">
                {productsRecommend.map((item) => (
                    <ProductsRecommendItem key={item.id} item={item}/>
                ))}
            </div>
        </> 
    )
}

export default ProductsRecommend