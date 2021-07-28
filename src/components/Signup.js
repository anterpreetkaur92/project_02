import React from 'react'
import Header1 from './Header1';
const Signup = () => {
    return (
        <div >
            <Header1 />
            <div class='flex flex-col justify-center items-center'>
                <div class='pt-12 text-gray-400 font-medium'>STEP 1 OF 3</div>
                <div class='m-4 font-sans flex flex-col justify-center items-center italic text-3xl tracking-wide font-bold font-6xl'  >Create Your Futureview Trade Account</div>
                <div class='w-auto border-2 bg-white p-4'>
                    <div class='flex'>
                        <div class='m-1'>
                            <label>FirstName*</label><br/>
                            <input class='border-2 bg-gray-100  w-48' type='text' />
                        </div>
                        <div class='m-1'>
                            <label>LastName*</label><br/>
                            <input class='bg-gray-100 border-2 w-48' type='text' />
                        </div>
                    </div>
                
                    <div class='flex'>
                        <div class='mt-1 m-1'>
                            <label>Email Address*</label><br/>
                            <input class='border-2 bg-gray-100 w-48' type='text' />
                        </div>
                        <div class='mt-1 m-1'>
                            <label>Password*</label><br/>
                            <input class='bg-gray-100 border-2 w-48' type='text' />
                        </div>
                    </div>
                    <div class='pt-1 ml-2'>
                        <input type='checkbox' class='border-2' />
                        <label class='m-2' for="remember">I certify that i am 18years of age or older,and i agree to<br/> the terms and conditions. </label>
                    </div>
                <div class='ml-2'>
                    <button class='bg-red-200 border-2 w-96 border-yellow-400'><div class='pl-8 p-2'>Create An Account</div></button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
