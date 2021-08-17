import React from 'react'
import Header1 from './Header1';
//import LoginPage from './LoginPage';
import logo from '../images/futureview.png';
import { useHistory } from 'react-router-dom';
const HomePage = () => {

    let history = useHistory();
    return (
        <div class="w-1366 h-657">
            <Header1 />

            <div className='w-1366 h-593 pl-102 bg-gray-100 bg-opacity-10'>
                <div className="w-1161 h-593 pt-30 ">
                    <div className="w-1161 h-450 flex flex-col justify-center items-center">
                        <div className='w-500 h-342 border rounded bg-white mt-92'>
                            <div className='w-458 h-67 mx-21 mt-21 pt-6 '>
                                <div className="mx-81 w-296 h-27 text-17 font-normal my-0.5 "> Welcome to FutureView Trade</div>
                                
                            </div>
                            <div className='mx-21'>
                                <img src={logo} alt="logoimage" width="458" height="169" />
                                
                            </div>
                            <div className='flex w-442 h-45 mt-47 mx-28'>
                                <div className=''><button onClick={() => { history.push("/signup") }} className='bg-gray-100 w-100 h-45 mr-60 rounded'>Signup</button></div>
                                <div className=''><button className="bg-futurecolor  w-100 h-45 rounded" onClick={() => { history.push("/login") }}> Login</button></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage
