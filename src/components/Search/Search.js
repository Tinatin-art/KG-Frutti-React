import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const {products} = useSelector(state => state.products); 
    const [text, setText] = useState('');
    const [foundUsers, setFoundUsers] = useState(products);

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = products.filter((user) => {
            return user.name.toLowerCase().includes(keyword.toLowerCase());
          });
          setFoundUsers(results);
        } else {
          setFoundUsers([]);
      
        }
    
        setText(keyword);
        };

    const navigate = useNavigate()
    const getId = (id) => {
        navigate(`/products/${id.id}`)
    }

    // function handleClick() {
        // getId()
    // }

    return (
        <>
            <form className='main__search'>
                <input 
                    type="text" 
                    placeholder="What do you need?"
                    value={text}
                    onChange={filter}
             
                />
                <button className="main__search-btn">Search</button>
            </form>
            <ul className='main__search-dropdown'>
            {text !== '' ? (
                        foundUsers.map((item) => {
                            return (
                                <li onClick={() => getId(item)}  key={item.id}>{item.name}</li>
                            )
                        })
                    ) : null}
            </ul>
        </>
    )
}

export default Search