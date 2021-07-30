import React from 'react'
import logo from '../images/logo2.jpg'
import {useHistory} from 'react-router-dom'
const Header2 = () => {
    let history=useHistory();
    return (
        <div>
            <div className='h-20 w-fullscreen flex border-b-2 p-4 '>
                <div>
                    <img src={logo} alt="logoimage" width="70" height="70" />
                </div>
                <div className='text-2xl pt-1 pl-2 font-bold'>Futureview</div>
                
              <div className='flex'>
              <div>               
                <button onClick={()=>{history.push("/summary")}} class="border-2 border-white focus:border-yellow-500 text-gray-400 font-bold ml-9 m-2 p-2">Summary</button>
                </div>
            <div>
                <button className="text-gray-400 font-bold m-2 p-2">Protfolio</button>
            </div>
            <div>
                <button className="text-gray-400 font-bold m-2 p-2">News</button>
            </div>

            <div >
                <input className='bg-gray-100 ml-36 mt-2 w-64 h-9' placeholder="Search for a Stock" type='text'/>
            </div>
            <div>
                <button className="bg-red-100 border border-yellow-600 px-10 py-1 mt-2 ml-2 px-14 font-semibold text-yellow-700 tracking-widest">MAKE A TRADE</button>
            </div>
              </div>
            </div>
        </div>
    )
}

export default Header2
