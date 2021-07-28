import React from 'react'
import Header1 from './Header1';
import LoginPage from './LoginPage';
import logo from '../images/logo2.jpg'
const HomePage = () => {
    return (
        <div>
          <Header1/>
            <div class='pt-48 flex flex-col justify-center items-center'>
                <div class='w-auto border-2 bg-white p-4'>
                    <div class='text-2xl px-14 pt-4'>
                        Welcome to FutureView Trade
                    </div>
                    <div class='flex m-2'>
                    <img src={logo} alt="logoimage" width="200" height="120" />
                        <div class='text-4xl font-medium tracking-wide pt-10'>Futureview</div>
                    </div>
                    <div class='flex '>
                        <div class='mr-72 p-2'><button class='bg-gray-100 px-3 py-1'>Signup</button></div>
                        <div class='p-2'><button onClick={<LoginPage />} class='bg-yellow-300 px-3 py-1'>Login</button></div>

                    </div>

                           </div>
                </div>
            </div>  
   
    )
}

export default HomePage
