import {React,useState} from 'react'
import Header2 from './Header2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid'

import { useHistory } from 'react-router-dom';
const Portfolio = () => {

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
            <Header2 />
            <div className='w-1366 h-593 pl-102 bg-gray-100 bg-opacity-10'>
                <div className="w-1161 h-593 pt-30 ">
                    <div className='px-540 mt-14 text-xs text-gray-400 font-bold'>STEP 2 OF 3</div>
                    <div className='px-422 mt-4 h-45 font-bold text-3xl'  >Import Your Portfolio</div>
                    <div className='w-1161 h-248 pt-16'>
                        <div className='border-2 bg-white  w-452 h-232 ml-355 rounded-sm '>
                            <div className=" w-410 h-68 mt-19 ml-19">
                                <div className='font-semibold text-gray-600 w-410 h-50 tracking-wide'>
                                    To see your portfolio in your futureview dashboard <br />you'll need to login to InfoWare.
                                </div>
                            </div>
                            <div className='flex w-422 h-57 ml-19'>
                                <div>
                                    <label className="text-gray-400 text-xs font-semibold ">Username/Email*</label><br />
                                    <input className='bg-gray-100 w-199 h-37 rounded-sm shadow-inner' type='text' />
                                </div>
                                <div>
                                    <label className="text-gray-400 text-xs font-semibold ml-3">Password*</label><br />
                                    <button className='icon2' onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                                    <input className=' bg-gray-100 w-199 h-37 ml-3 rounded-sm shadow-inner' type={type} />
                                </div>
                            </div>
                            <div className='w-410 h-65 ml-19'>
                                <button className="px-32  h-45 bg-pink-100 bg-opacity-60 w-410 font-semibold h-45 border text-futurecolor border-futurecolor mt-5">Connect InfoWare</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio


