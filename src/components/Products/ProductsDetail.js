import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import apple from "../../assets/images/pear.jpg";
import { getOneProducts  } from '../../actions/productsAction';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Ratings/Rating';


const ProductsDetail = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
	
    const { oneProduct, productsLoadingStatus} = useSelector(state => state.products);
    
    useEffect(() => {
        dispatch(getOneProducts(id));

    }, [dispatch, id ]);

    if (productsLoadingStatus === "loading") {
        return <div>Загрузка</div>;
    } else if (productsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const {name, currency, description, weight, weightUnit, madeIn, sku, rateQuantity, price, priceNew, rate} = oneProduct;


  return (
      
    <>
        <div className='detail__image-wrapper'>
            <div className='detail__image'>
                <img src={apple} alt="product-img" />
            </div>
        </div>
        <div className="detail__product-wrapper">
            <div>
                <h1 className='product__title'>{name}</h1>
                <div className="product__title-details">{madeIn},&nbsp;<span className="product__sku">артикул&nbsp;{sku}</span></div>
                <div className="product__rating-item">
                    <Rating 
                        rate={rate} 
                        id={id} 
                        rateQuantity={rateQuantity} 
                     />
                    <span> Здесь количество звездочек {rateQuantity} </span>
                </div>
                <div>
                    <p className="product__old-price">{price}<span>&nbsp;{currency}</span></p>
                    <div className="product__current-price" >{priceNew}<span >&nbsp;{currency}</span></div>
                    <div className="product__measure">цена за {weight} {weightUnit}</div>
                    <p>{description}</p>
                </div>
                <button className="product__buy-btn">Купить</button>
            </div>
        </div>
     
    </>
  )
}

export default ProductsDetail