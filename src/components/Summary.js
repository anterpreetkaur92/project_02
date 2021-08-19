import React from 'react'
import Header2 from './Header2';
import { AiOutlineArrowDown } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import {IconContext} from 'react-icons';
import {useHistory} from 'react-router-dom';
const Summary = () => {

    let history = useHistory();
    return (
        <div class="w-1366 h-657">
            <Header2 />
            <div className='w-1366 h-593 pl-102 bg-gray-100 bg-opacity-10'>
                <div className="w-1161 h-593 pt-30 overflow-y-auto ">
                    <div className="flex ">
                        <div className=''>
                            <div className='w-858 h-144'>
                                <div className='w-818 h-30'>
                                    <label className="font-bold text-gray-400">Your Stocks test</label><br />
                                    <table className="table-fixed border-collapse border border-gray-300 mt-3">
                                        <thead>
                                            <tr classNames="bg-gray-300 border-collapse border border-gray-300 h-10 text-gray-500">
                                                <th className="w-201 h-41 ">Stock</th>
                                                <th className="w-201 h-41">Shares</th>
                                                <th className="w-201 h-41">Price</th>
                                                <th className="w-201 h-41">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-201 h-41 pl-14 ">ARDOVA</td>
                                                <td className="w-201 h-41 pl-14 ">104</td>
                                                <td className="w-201 h-41 pl-14 ">15.50</td>
                                                <td className="w-201 h-41 pl-14 ">1,612.00</td>
                                            </tr>

                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="text-blue-600 text-bold h-41 pl-14"><a href="#">See More</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className='h-92 mt-4'>
                                <label className="font-bold text-gray-400 ">Top Traded Today</label>
                                <div className="border border-gray-300 bg-white mt-2 w-96 pl-6 h-10 pt-2">
                                    ARDOVA
                                </div>
                            </div>

                            <div className='flex'>
                                <div className="mr-6 mt-1">
                                    <label className="font-bold text-gray-400 "> Top Gainers Today</label>
                                    <table className="table-fixed border-collapse border border-gray-300 mt-2">
                                        <thead >
                                        </thead>
                                        <tbody className="bg-white">
                                        <IconContext.Provider value={{ color: 'green', size: '',  }}>

                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /> </div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">ARD</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">110<FaChartLine /></div></td>
                                            </tr>
                                            </IconContext.Provider>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="m-4 mt-1">
                                    <label className="font-bold text-gray-400 "> Top Lossers Today</label>
                                    <table className="table-fixed border-collapse border border-gray-300 mt-2">
                                        <thead>
                                        </thead>
                                        <tbody className="bg-white">
                                        <IconContext.Provider value={{ color: 'red', size: '22px' }}>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>
                                            <tr className="bg-white border-collapse border border-gray-300 h-10">
                                                <td className="w-188 h-40 pl-14 ">sample</td>
                                                <td className="w-188 h-40 pl-14 "><div class="flex">541<AiOutlineArrowDown /></div></td>
                                            </tr>
                                            </IconContext.Provider>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='w-286 mt-34'>
                            <div className="h-99 w-274 bg-gray-200 ">
                                <div className="text-yellow-800 text-4xl font-bold px-28 pt-4">
                                    1,612
                                </div>
                                <div className="pl-20 text-gray-500 font-bold">
                                    Total Portfolio Value
                                </div>
                            </div>
                            <div className="h-246 w-276 bg-gray-200  mt-12">
                                <div className="text-yellow-600 text-4xl font-bold px-28 pt-4">
                                    1,402
                                </div>
                                <div className="pl-28 text-gray-500 font-bold">
                                    Wallet Balance
                                </div>
                                <div className="mt-6 mx-7">
                                    <button className="text-red-900 font-bold border border-red-900 bg-red-100 opacity-50 px-10 h-45 w-234">Deposit Funds</button><br />
                                    <button className="text-blue-800 font-bold border border-blue-900 bg-gray-300 px-10 mt-3 h-45 w-234">Withdraw Funds</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary






