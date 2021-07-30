import React from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom'

import Header1 from './Header1';

const LoginPage = () => {
    let history=useHistory();
    return (
        <div className='bg-gray-50 h-screen w-screen'>
            <Header1 />
            <div className=' pt-40 m-4 font-sans flex flex-col justify-center items-center italic text-3xl tracking-wider font-semibold font-6xl'  >Welcome Back</div>
            <div className='pt-46 w-screen flex flex-col justify-center items-center'>
                <div className='w-auto border-2 bg-white p-4'>
                    <div className='flex'>
                        <div className='m-1 bg-white'>
                            <label htmlFor="email">Email Address*</label><br />
                            <input className='pr-2 border-2 bg-gray-100 w-48 bg-opacity-80' type='email' />
                        </div>
                        <div class='m-1 bg-white'>
                            <label htmlFor="password">Password*</label><br />
                            <input className='pr-2 border-2 bg-gray-100 w-48 bg-opacity-80' type='password' />
                        </div>
                    </div>
                    <div className='pt-2 ml-4'>
                        <input type='checkbox' class='border-2' />
                        <label className='m-2' htmlFor="remember">Remember me</label>
                    </div>
                    <div className='flex ml-2'>
                        <div>
                            <button onClick={()=>{history.push("/login")}} className='font-bold border-2 border-white bg-white w-48 p-2 px-6  hover:border-red-600 hover:bg-red-100'>Login</button>
                        </div>
                        <div>
                            <button onClick={()=>{history.push("/resetpassword")}} className='font-bold border-2 border-white bg-white p-2 px-6 w-48 hover:border-red-600 hover:bg-red-100'>Reset Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
