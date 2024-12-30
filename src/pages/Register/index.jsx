import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useAuth } from '../../context/AuthContext';

export default function Register() {
    const { signup } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const signunCheck = signup(data);
        console.log(signunCheck)
        if(signunCheck) {
            navigate('/')
        }
        else {
            navigate('/register')
        }
    };

    return (
        <div className='flex justify-center items-center py-10'>
            <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <h2 className='text-xl text-center font-semibold mb-4'>Register</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Name</label>
                        <input 
                        {...register("name", { required: true })}
                        type="text" name="name" id="name" placeholder='name'
                        className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                        <input 
                        {...register("email", { required: true })}
                        type="email" name="email" id="email" placeholder='email'
                        className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                        <input 
                        {...register("password", { required: true })}
                        type="password" name="password" id="password" placeholder='Password'
                        className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password_confirmation">Confirm Password</label>
                        <input 
                        {...register("password_confirmation", { required: true })}
                        type="password" name="password_confirmation" id="password_confirmation" placeholder='confirm password'
                        className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                        />
                    </div>
                    <div className='w-full'>
                        <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Register </button>
                    </div>
                </form>

                <p className='align-baseline font-medium mt-4 text-sm'>Already have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link></p>

                <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    )
}