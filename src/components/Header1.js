import React from 'react'
import logo from '../images/futureview.png'
import {useHistory} from 'react-router-dom'
const Header1 = () => {
    let history=useHistory();
    return (
        <div>
            <div className='h-64 w-1366 border-b p-2 '>
            
                    <img src={logo} alt="logoimage" width="160" height="50" onClick={()=>{history.push("/")}} />
                
            </div>
        </div>
    )
}

export default Header1
