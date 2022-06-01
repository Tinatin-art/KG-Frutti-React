import React, {useEffect} from 'react';
import CardItems from './ProductsItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productsAction';


function Cards() {

    const dispatch = useDispatch();
 
    
    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])


    const products = useSelector(state => {
        if(state.filters.activeFilter === 'all'){
            return state.products.products;
        }else {
            return state.products.products.filter(item => item.element === state.filters.activeFilter)
        }
    
        
    })


    return  (
        <>
            <div className="products">
                {products.map((item) => (
                <CardItems key={item.id} item={item}/>
                ))}
            </div>
        </> 
    )
}
export default Cards;
