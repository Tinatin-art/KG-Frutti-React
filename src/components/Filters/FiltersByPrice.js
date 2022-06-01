import React from 'react'

const FiltersByPrice = () => {
    return (
            <div className="main__filters">
                <h3>Предложения</h3>
                <div className="main__filters-listbox">
                    <div className="main__filters-list">
                        <input type="checkbox" value="undefined" id="filter-discount"/>
                        <label htmlFor="filter-discount">Со скидкой</label>
                        <span className="main__filters-count">7</span>
                    </div>
                    <div className="main__filters-list">
                        <input type="checkbox" value="undefined" id="filter-new"/>
                        <label htmlFor="filter-new">Новинка</label>
                        <span className="main__filters-count">10</span>
                    </div>
                </div>
                <h3>Цена</h3>
                <div className='main__filters-price'>
                    <div className='filters__price-wrapper'>
                        <div className='filters__price-from'>
                            <span>от</span>
                            <input type="number" />
                        </div>
                        <div className='filters__price-to'>
                            <span>до</span>
                            <input type="number" />
                        </div>
                    </div>
                    <input type="range"/>
                </div>
            </div>
    )
}

export default FiltersByPrice