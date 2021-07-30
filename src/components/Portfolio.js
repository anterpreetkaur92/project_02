import React from 'react'
import Header2 from './Header2'
const Portfolio = () => {
    return (
        <div>
            <Header2 />
            <div class='flex flex-col justify-center items-center'>
                <div class='pt-12 text-gray-400 font-medium'>STEP 2 OF 3</div>
                <div class='m-4 font-sans flex flex-col justify-center items-center italic text-3xl tracking-wide font-bold font-6xl'  >Import Your Portfolio</div>
                <div class='w-auto border-2 bg-white p-4'>
                    <div class="font-bold  text-black">
                        To see your portfolio in your futureview dashboard <br />you'll need to login to InfoWare.
                    </div>
                    <div class='flex'>
                        <div>
                            <label class="text-gray-400 text-xs font-semibold ">Username/Email*</label><br />
                            <input class='mt-1 bg-gray-100 w-48' type='text' />
                        </div>
                        <div>
                            <label class="text-gray-400 text-xs font-semibold ml-3">Password*</label><br />
                            <input class='m-1 ml-3 bg-gray-100 w-44' type='text' />
                        </div>
                    </div>
                    <div>
                    <button class="px-32 bg-red-200 h-10 border-2 border-yellow-600 ">Connect InfoWare</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
