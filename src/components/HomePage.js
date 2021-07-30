import React from 'react'
import Header1 from './Header1';
//import LoginPage from './LoginPage';
import logo from '../images/logo2.jpg';
import { useHistory } from 'react-router-dom';
const HomePage = () => {

    let history = useHistory();
    return (
        <div>
            <Header1 />
            
            <div className='pt-48 flex flex-col justify-center items-center'>
                <div className='w-auto border-2 bg-white p-4'>
                    <div className='text-2xl px-14 pt-4'>
                        Welcome to FutureView Trade
                    </div>
                    <div className='flex m-2'>
                        <img src={logo} alt="logoimage" width="200" height="120" />
                        <div className='text-4xl font-medium tracking-wide pt-10'>Futureview</div>
                    </div>
                    <div className='flex '>
                        <div className='mr-72 p-2'><button onClick={()=>{history.push("/signup")}} className='bg-gray-100 px-3 py-1'>Signup</button></div>
                        <div className='p-2 '><button className="bg-yellow-300 px-3 py-1" onClick={()=>{history.push("/login")}}> Login</button></div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HomePage
