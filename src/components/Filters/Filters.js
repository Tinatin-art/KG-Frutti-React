
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeFilter, getFilters } from '../../actions/filtersAction';
const Filters = () => {

    const dispatch = useDispatch();
    const {filters} = useSelector(state => state.filters)

    useEffect(() => {
        dispatch(getFilters())
    }, [dispatch])



    const isActive = (e , id) => {
        dispatch(activeFilter(id))

        if(id){
            e.currentTarget.classList.add("filters__active"); 
        }
    }
  

    const renderFilters = (arr) => {
        if(arr.length === 0){
            return <h5>Error</h5>
        }
        return arr.map(({id, name}) => {
            return <li 
                className={`filters__list `} 
                key={id}
                onClick={(e) => isActive(e, id)}
                >{name}</li>
        })
    }

    const elements = renderFilters(filters)

    return (
        <>
            <ul className='filters__item'>
                {elements}
            </ul>
        </>
    )
}

export default Filters