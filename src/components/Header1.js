import React from 'react'
import logo from '../images/logo2.jpg'
const Header1 = () => {
    return (
        <div>
            <div class='h-20 w-fullscreen flex border-b-2 p-4 '>
                <div>
                    <img src={logo} alt="logoimage" width="70" height="70" />
                </div>
                <div class='text-2xl pt-1 pl-2 font-bold'>Futureview</div>
            </div>
        </div>
    )
}

export default Header1
