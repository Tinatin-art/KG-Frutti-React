import React , {useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateRate } from '../../actions/productsAction';

const Rating = ({rate, id , rateQuantity }) => {

    const dispatch = useDispatch();

    const [rating, setRating] = useState(rate);
    const [hover, setHover] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRate = {
            id: id,
            rate: rating,
            rateQuantity: rateQuantity + rating,
        }

        dispatch(updateRate(newRate, id))
    }
  return (
    <>
    <form onSubmit={handleSubmit} className="rating">
        {[...Array(5)].map((star, index) => { 
		index += 1;
		return (    
		    <button
		        type="submit"
		        key={index}
		        className={index <= (hover || rate) ? "onrate" : "offrate"}
		        onClick={() => setRating(index)}
		        onMouseEnter={() => setHover(index)}
		        onMouseLeave={() => setHover(rating)}
		        > 
		    </button>           
		    );
		})}
    </form>
    </>
  )
}

export default Rating