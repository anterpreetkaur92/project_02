import React from 'react'
import logo from '../images/futureview.png'
import person from '../images/person.jpg'
import {useHistory} from 'react-router-dom'
const Header2 = () => {
    let history=useHistory();
    return (
        <div>
            <div className='h-64 w-1366 border-b  flex'>
                <div className="p-2">
                    <img src={logo}  alt="logoimage" width="160" height="50" onClick={()=>{history.push("/")}} />
                </div>
                                
              <div className='flex w-358 h-64'>
                             
                <button  onClick={()=>{history.push("/summary")}} className="w-73 h-64  text-gray-400 font-semibold ml-14 border-b hover:border-b-3 hover:border-yellow-600">Summary</button>
                
            
                <button onClick={()=>{history.push("/portfolio")}} className="text-gray-400 font-semibold w-66 h-64 ml-11 border-b hover:border-b-3 hover:border-yellow-600 ">Portfolio</button>
            
            
                <button className="text-gray-400 font-semibold w-42 h-64 ml-11 border-b hover:border-b-3 hover:border-yellow-600">News</button>
            
            </div>
            
                <input className='bg-gray-100  w-298 h-40 ml-138 mt-13 rounded-sm space'   placeholder="Search for a Stock" type='text'/>
            
            
                <button className="bg-red-100 border border-yellow-600 w-200 h-40  font-semibold text-yellow-700 tracking-widest ml-5 mt-3">MAKE A TRADE</button>
            
            <div class="mt-3 ml-10 w-78 h-35">
                
                <button  class='text-gray-300 text-base font-bold pt-2 pl-1'>Menu</button>
                </div>
                <div class="ml-2 my-2 rounded-full overflow-hidden h-11 w-11 mt-3.5">
                    <img src={person} class=" "></img>
                </div>
              
            </div>
        </div>
    )
}

export default Header2
