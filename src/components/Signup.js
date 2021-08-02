import React from 'react'
import Header1 from './Header1';
import {useHistory} from 'react-router-dom'
import {Formik} from 'formik'
const Signup = () => {
    let history=useHistory();
    return (
        <div >
            <Header1 />
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-12 text-gray-400 font-medium'>STEP 1 OF 3</div>
                <div className='m-4 font-sans flex flex-col justify-center items-center italic text-3xl tracking-wide font-bold font-6xl'  >Create Your Futureview Trade Account</div>
                <div className='w-auto border-2 bg-white p-4'>
                    <div className='flex'>
                        <div className='m-1'>
                            <label>FirstName*</label><br/>
                            <input className='border-2 bg-gray-100  w-48' type='text' />
                        </div>
                        <div className='m-1'>
                            <label>LastName*</label><br/>
                            <input className='bg-gray-100 border-2 w-48' type='text' />
                        </div>
                    </div>
                
                    <div className='flex'>
                        <div className='mt-1 m-1'>
                            <label>Email Address*</label><br/>
                            <input className='border-2 bg-gray-100 w-48' type='text' />
                        </div>
                        <div className='mt-1 m-1'>
                            <label>Password*</label><br/>
                            <input className='bg-gray-100 border-2 w-48' type='text' />
                        </div>
                    </div>
                    <div className='pt-1 ml-2'>
                        <input type='checkbox' className='border-2' />
                        <label className='m-2' for="remember">I certify that i am 18years of age or older,and i agree to<br/> the terms and conditions. </label>
                    </div>
                <div className='ml-2'>
                    <button onClick={()=>{history.push("/portfolio")}} className='bg-red-200 border-2 w-96 border-yellow-400'><div class='pl-8 p-2'>Create An Account</div></button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
