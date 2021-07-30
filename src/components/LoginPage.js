import React from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom'

import Header1 from './Header1';

const LoginPage = () => {
    let history=useHistory();
    return (
        <div class='bg-gray-50 h-screen w-screen'>
            <Header1 />
            <div class=' pt-40 m-4 font-sans flex flex-col justify-center items-center italic text-3xl tracking-wider font-semibold font-6xl'  >Welcome Back</div>
            <div class='pt-46 w-screen flex flex-col justify-center items-center'>
                <div class='w-auto border-2 bg-white p-4'>
                    <div class='flex'>
                        <div class='m-1 bg-white'>
                            <label for="email">Email Address*</label><br />
                            <input class='pr-2 border-2 bg-gray-100 w-48 bg-opacity-80' type='email' />
                        </div>
                        <div class='m-1 bg-white'>
                            <label for="password">Password*</label><br />
                            <input class='pr-2 border-2 bg-gray-100 w-48 bg-opacity-80' type='password' />
                        </div>
                    </div>
                    <div class='pt-2 ml-4'>
                        <input type='checkbox' class='border-2' />
                        <label class='m-2' for="remember">Remember me</label>
                    </div>
                    <div class='flex ml-2'>
                        <div>
                            <button onClick={()=>{history.push("/login")}} class='font-bold border-2 border-white bg-white w-48 p-2 px-6  hover:border-red-600 hover:bg-red-100'>Login</button>
                        </div>
                        <div>
                            <button onClick={()=>{history.push("/resetpassword")}} class='font-bold border-2 border-white bg-white p-2 px-6 w-48 hover:border-red-600 hover:bg-red-100'>Reset Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
