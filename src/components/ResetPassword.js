import React from 'react'
import Header1 from './Header1';
import {useHistory} from 'react-router-dom'

const ResetPassword = () => {
    let history=useHistory();
    return (
        <div>
            <Header1 />
            <div class='flex flex-col justify-center items-center'>
                <div class=' pt-40 m-4 font-sans flex flex-col justify-center items-center italic text-3xl tracking-wide font-semibold font-6xl'  >Reset Password</div>
                <div class='w-auto border-2 bg-white p-4'>
                    <div>Email Address*</div>
                    <div class='border-2 w-80'><input type='text' /></div>
                    <div class='flex'>
                        <button  class='font-bold border-2 border-white bg-white w-44 p-2 px-6  hover:border-red-600 hover:bg-red-100'>Reset Password</button>
                        <button onClick={()=>{history.push("/login")}} class='font-bold border-2 border-white bg-white w-36 p-2 px-8  hover:border-red-600 hover:bg-red-100'>GoToLogin</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ResetPassword
