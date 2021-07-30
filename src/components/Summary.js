import React from 'react'
import Header2 from './Header2'

const Summary = () => {
    return (
        <div>
            <Header2 />
            <div class='bg-gray-100 w-screen h-screen'>
                <div class="flex">
                    <div class='flex'>

                        <div class='pl-32 mt-6'>
                            <label class=" mt-5  font-bold text-gray-400">Your Stocks test</label><br />
                            <div>
                                <table class="table-fixed border-collapse border border-gray-300">
                                    <thead>
                                        <tr class="bg-gray-300 border-collapse border border-gray-300 h-10 text-gray-500">
                                            <th class="w-44 ">Stock</th>
                                            <th class="w-44 ">Shares</th>
                                            <th class="w-44 ">Price</th>
                                            <th class="w-44 ">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                        <tr class="bg-white border-collapse border border-gray-300 h-10">
                                            <td class="w-44 pl-14 ">ARDOVA</td>
                                            <td class="w-44 pl-14 ">104</td>
                                            <td class="w-44 pl-14 ">15.50</td>
                                            <td class="w-44 pl-14 ">1,612.00</td>
                                        </tr>

                                        <tr class="bg-white border-collapse border border-gray-300 h-10">
                                            <td class="text-blue-600 text-bold pl-14 ">See More</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-4">
                                <label class="font-bold text-gray-400 ">Top Traded Today</label>
                                <div class="border border-gray-300 bg-white mt-4 w-96 pl-6 h-10 pt-2">
                                    ARDOVA
                                </div>
                            </div>

                            <div class='flex'>


                                <div class="mr-6 mt-4">
                                    <label class="font-bold text-gray-400 "> Top Gainers Today</label>
                                    <table class="table-fixed border-collapse border border-gray-300 mt-2">
                                        <thead>

                                        </thead>
                                        <tbody class="bg-white">
                                            <tr class="bg-white border-collapse border border-gray-300 h-10">
                                                <td class="w-44 pl-14 ">ARD</td>
                                                <td class="w-44 pl-14 ">110</td>

                                            </tr>



                                        </tbody>
                                    </table>
                                </div>



                                <div class="m-4">
                                    <label class="font-bold text-gray-400 "> Top Lossers Today</label>
                                    <table class="table-fixed border-collapse border border-gray-300 mt-2">
                                        <thead>

                                        </thead>
                                        <tbody class="bg-white">
                                            <tr class="bg-white border-collapse border border-gray-300 h-10">
                                                <td class="w-40 pl-14 ">sample</td>
                                                <td class="w-40 pl-14 ">541</td>

                                            </tr>


                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="h-24 w-80 bg-gray-200 ml-14 mt-12">
                            <div class="text-yellow-800 text-4xl font-bold px-28 pt-4">
                                1,612
                            </div>
                            <div class="pl-20 text-gray-500 font-bold">
                                Total Portfolio Value
                            </div>
                        </div>
                        <div class="h-56 w-80 bg-gray-200 ml-14 mt-12">
                            <div class="text-yellow-600 text-4xl font-bold px-28 pt-4">
                                1,402
                            </div>
                            <div class="pl-28 text-gray-500 font-bold">
                                Wallet Balance
                            </div>
                           <div class="mt-6 mx-7">
                           <button class="text-red-900 font-bold border border-red-900 bg-red-100 opacity-50 px-16 h-11 w-64">Deposit Funds</button><br/>
                            <button class="text-blue-800 font-bold border border-blue-900 bg-gray-300 px-14 mt-3 h-11 w-64">Withdraw Funds</button>

                           </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Summary
