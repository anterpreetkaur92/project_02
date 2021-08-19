import React from 'react'
import Header1 from './Header1';
//import LoginPage from './LoginPage';
import logo from '../images/futureview.png';
import { useHistory } from 'react-router-dom';
const ResetPassword = () => {

    let history = useHistory();
    return (
        <div class="w-1366 h-657">
            <Header1 />
            <div className=' w-1366 h-593 pl-102 bg-gray-100 bg-opacity-10'>
                <div className="w-1161 h-593 pt-30 ">
                    <div className="w-1161 h-225 mt-100 ">
                        <div className='text-3xl font-bold ml-561'>Reset Password</div>
                        <div className='w-320 h-164 border bg-white ml-523 mt-25 rounded'>
                            <div className='w-290 h-57 mt-19 ml-21 control-group'>
                                <label className='control-label text-xs font-medium text-gray-500'>Email Address *</label><br />
                                <input type='text' className='bg-gray-100 bg-opacity-60 rounded-sm shadow-inner w-278 h-37' /></div>
                            <div className='flex w-278 h-65 ml-21'>
                                <button className='font-semibold mt-21 border border-white  border-futurecolor text-sm  text-futurecolor bg-pink-100 bg-opacity-40 rounded-sm w-139 h-45'>Reset Password</button>
                                <button onClick={() => { history.push("/login") }} className='mt-21 font-bold border border-white w-139 h-45 bg-white  hover:bg-gray-200 '>Go To Login</button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResetPassword

