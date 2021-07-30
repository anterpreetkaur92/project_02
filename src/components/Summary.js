import React from 'react'
import Header2 from './Header2'
import {useState,useEffect} from 'react'
const Summary = () => {
   const[a,seta]=useState();
useEffect(()=>{
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo)")
.then(response=>response.json())
.then(data=>console.log(data))
},[])
    return (
        <div>
            <Header2 />
            <div className='bg-gray-100 w-screen h-screen'>
                <div className="flex">
                    <div className='flex'>

                        <div className='pl-32 mt-6'>
                            <label className=" mt-5  font-bold text-gray-400">Your Stocks test</label><br />
                            <div>
                                <table className="table-fixed border-collapse border border-gray-300">
                                    <thead>
                                        <tr classNames="bg-gray-300 border-collapse border border-gray-300 h-10 text-gray-500">
                                            <th className="w-44 ">Stock</th>
                                            <th className="w-44 ">Shares</th>
                                            <th className="w-44 ">Price</th>
                                            <th className="w-44 ">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="bg-white border-collapse border border-gray-300 h-10">
                                            <td className="w-44 pl-14 ">ARDOVA</td>
                                            <td className="w-44 pl-14 ">104</td>
                                            <td className="w-44 pl-14 ">15.50</td>
                                            <td className="w-44 pl-14 ">1,612.00</td>
                                        </tr>

                                        <tr className="bg-white border-collapse border border-gray-300 h-10">
                                            <td className="text-blue-600 text-bold pl-14 ">See More</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4">
                                <label className="font-bold text-gray-400 ">Top Traded Today</label>
                                <div className="border border-gray-300 bg-white mt-4 w-96 pl-6 h-10 pt-2">
                                    ARDOVA
                                </div>
                            </div>

                            <div className='flex'>


                                <div className="mr-6 mt-4">
                                    <label className="font-bold text-gray-400 "> Top Gainers Today</label>
                                    <table className="table-fixed border-collapse border border-gray-300 mt-2">
                                        <thead>

                                        </thead>
                                        <tbody className="bg-white">
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-44 pl-14 ">ARD</td>
                                                <td className="w-44 pl-14 ">110</td>

                                            </tr>



                                        </tbody>
                                    </table>
                                </div>



                                <div className="m-4">
                                    <label className="font-bold text-gray-400 "> Top Lossers Today</label>
                                    <table className="table-fixed border-collapse border border-gray-300 mt-2">
                                        <thead>

                                        </thead>
                                        <tbody className="bg-white">
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-40 pl-14 ">sample</td>
                                                <td className="w-40 pl-14 ">541</td>

                                            </tr>


                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-24 w-80 bg-gray-200 ml-14 mt-12">
                            <div className="text-yellow-800 text-4xl font-bold px-28 pt-4">
                                1,612
                            </div>
                            <div className="pl-20 text-gray-500 font-bold">
                                Total Portfolio Value
                            </div>
                        </div>
                        <div className="h-56 w-80 bg-gray-200 ml-14 mt-12">
                            <div className="text-yellow-600 text-4xl font-bold px-28 pt-4">
                                1,402
                            </div>
                            <div className="pl-28 text-gray-500 font-bold">
                                Wallet Balance
                            </div>
                           <div className="mt-6 mx-7">
                           <button className="text-red-900 font-bold border border-red-900 bg-red-100 opacity-50 px-16 h-11 w-64">Deposit Funds</button><br/>
                            <button className="text-blue-800 font-bold border border-blue-900 bg-gray-300 px-14 mt-3 h-11 w-64">Withdraw Funds</button>

                           </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Summary
