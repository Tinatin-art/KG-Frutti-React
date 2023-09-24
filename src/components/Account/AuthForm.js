import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import { signIn } from '../../auth/store/SignInSlice';
import {useNavigate} from "react-router-dom";


const AuthForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('iau@live.ru');
    const [password, setPassword] = useState('iau123');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn({email, password, navigate}))
    }


    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Email</label>
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className='input' 
                        type="text"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className='input' 
                        type="password"
                    />
                </div>
                <button type="submit">Log in</button>
            </form> 
        </>
    )
}

export default AuthForm