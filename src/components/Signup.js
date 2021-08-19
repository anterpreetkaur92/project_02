import { React, useState } from 'react'
import Header1 from './Header1';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';




const Signup = () => {
    let history = useHistory();
    let [icon, setIcon] = useState(faEyeSlash);
    let [type, setType] = useState('password');
    const changeIcon = () => {
        if (icon ==faEyeSlash && type == 'password') {
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
            <div className='w-1366 h-593 pl-102 bg-gray-200 bg-opacity-10'>
                <div className="w-1161 h-593 pt-30 ">
                    <div className='px-540 mt-14 text-xs text-gray-400 font-bold '><span className='tracking-wider'>STEP 1 OF 3</span></div>
                    <div className='px-290 mt-4 h-45 font-bold text-24 '>Create Your FutureView Trade Account</div>
                    <div className="w-1161 h-248  flex flex-col justify-center items-center">
                        <div className='w-452 h-301 mt-12 ml-354 bg-white border rounded '>
                            <div className='flex ml-21 mt-5 w-422 h-57'>
                                <div className="control-group">
                                    <label className='control-label text-gray-600 text-xs'>FirstName *</label><br />
                                    <input className='border bg-gray-100 w-199 h-37 bg-opacity-60 shadow-inner rounded-sm' type='text' />
                                </div>
                                <div className="control-group">
                                    <label className='control-label text-gray-600 text-xs ml-3'>LastName *</label><br />
                                    <input className='bg-gray-100 border w-199 h-37 ml-3 bg-opacity-60 shadow-inner rounded-sm' type='text' />
                                </div>
                            </div>
                            <div className='flex ml-21 mt-5 w-422 h-57 '>                                
                                <div className="control-group" >
                                    <label className='control-label text-gray-600 text-xs'>Email Address *</label><br />
                                    <input className='border bg-gray-100 w-199 h-37 bg-opacity-60 shadow-inner rounded-sm' type='text' />
                                </div>
                                <div className="control-group">
                                    <label className=' control-label text-gray-600 text-xs ml-3'>Password *</label><br />
                                    <button className='icon' onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                                    <input className='bg-gray-100 border w-199 h-37 ml-3 bg-opacity-60 shadow-inner rounded-sm' type={type} />
                                </div>
                            </div>
                            <div className='w-410 h-60 ml-21 pt-5'>
                                <input type='checkbox' className='border-2' />
                                <label className='text-gray-600 font-normal text-base' for="remember">&nbsp;&nbsp;&nbsp;I certify that i am 18years of age or older,and i agree to<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    the terms and conditions. </label>
                            </div>
                            <div className='ml-21 w-410 h-65 pt-5'>
                                <button onClick={() => { history.push("/portfolio") }} className='bg-pink-100 bg-opacity-60 border w-410 border-futurecolor text-futurecolor'><div class='pl-8 p-2 font-bold text-sm'>Create An Account</div></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
