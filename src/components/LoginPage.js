import { React, useState } from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid'
import Header1 from './Header1';
const LoginPage = () => {
    let history = useHistory();
    let [icon, setIcon] = useState(faEyeSlash);
    let [type, setType] = useState('password');
    const changeIcon = () => {
        if (icon == faEyeSlash && type == 'password') {
            setIcon(faEye);
            setType('text');
        } else {
            setIcon(faEyeSlash)
            setType('password')
        }

    }
    return (
        <div class="w-1366 h-657">
            <Header1 />
            <div className='w-1366 h-593 pl-102 bg-gray-100 bg-opacity-10'>
                <div className="w-1161 h-593 ">
                    <div className="w-1161 h-266 mt-130">
                        <div className='w-224 h-45 ml-469 font-semibold text-3xl '>Welcome Back</div>
                        <div className='flex ml-366 w-430  h-205 bg-white border rounded mt-15'>
                            <div className=" w-400 h-57 mx-21 mt-17">
                                <div className="bg-white flex">
                                    <div className='control-group'>
                                        <label className="control-label text-xs text-gray-400 font-semibold">EmailAddress *</label><br />
                                        <input className='shadow-inner rounded-sm bg-gray-100  bg-opacity-60 w-188 h-37' type="email" name="email" />
                                    </div>
                                    <div className='bg-white control-group '>
                                        <label htmlFor="password" className=" control-label text-xs text-gray-400 font-semibold ml-11">Password *</label><br />
                                        <button className='icon' onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                                        <input className='shadow-inner rounded-sm bg-gray-100 bg-opacity-60 w-188 h-37 ml-11' type={type} name="password" />
                                    </div>
                                </div>
                                <div className='w-400 h-41 pt-21'>
                                    <label className='text-gray-400 text-sm font-semibold '><input type="checkbox" name="checked" value="Remember me" />
                                        &nbsp;&nbsp; Remember me </label>
                                </div>
                                <div className='flex w-388 h-65 pt-5'>
                                    <div>
                                        <button onClick={() => { history.push("/login") }} className='font-bold text-sm border text-futurecolor w-194 h-45 border-futurecolor rounded bg-pink-100  bg-opacity-60'>Login</button>
                                    </div>
                                    <div>
                                        <button onClick={() => { history.push("/resetpassword") }} className='font-bold text-xs border border-white w-194 h-45 bg-white rounded  hover:bg-gray-200'>Reset Password</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
