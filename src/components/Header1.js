import React from 'react'
import logo from '../images/logo2.jpg'
import {useHistory} from 'react-router-dom'
const Header1 = () => {
    let history=useHistory();
    return (
        <div>
            <div className='h-20 w-fullscreen flex border-b-2 p-4 '>
                <div>
                    <img src={logo} alt="logoimage" width="70" height="70" onClick={()=>{history.push("/")}} />
                </div>
                <div className='text-2xl pt-1 pl-2 font-bold hover:cursor-pointer' onClick={()=>{history.push("/")}}>Futureview</div>
            </div>
        </div>
    )
}

export default Header1
