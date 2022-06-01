import React from 'react'
import { useForm } from 'react-hook-form';

const AuthForm = () => {

    const { register, handleSubmit} = useForm({
        shouldUseNativeValidation: true,
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <input className='input'{...register("firstName", { required: true })} type="text"
                    />
                </div>
                <div>
                    <label>Laste Name</label>
                    <input className='input' {...register("lastName", { minLength: 2 })} type="text"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input className='input' {...register("email", { required: true })} type="text"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input className='input' {...register("password", { required: true })} type="password"
                    />
                </div>
                <button type="submit">Log in</button>
            </form> 
        </>
    )
}

export default AuthForm