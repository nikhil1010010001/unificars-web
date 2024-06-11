import React from 'react'
import { BiCalendar ,BiUser ,BiSolidColorFill  } from 'react-icons/bi';
import { BsFillFuelPumpFill,BsCarFront ,BsKey } from 'react-icons/bs';
import { IoMdSpeedometer } from 'react-icons/io';
import { GrDocumentVerified } from 'react-icons/gr';
import { FaHashtag } from 'react-icons/fa';

const CarDetailTable = (props) => {
    const { CarDetails  } = props
    // console.log("form Car details Table", CarDetails)

    return (
        <div className='border bg-white rounded-xl opacity-80 shadow'>
            <h2 className="p-4 text-base font-black">Car overview</h2>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 py-2 pb-6'>
                <div className='flex'>
                    <div><FaHashtag className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1 '>
                        <div className='text-md font-black text-black'>Car ID</div>
                        <div className='font-bold text-xs text-gray-900'>{CarDetails[0].unique_code}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BiCalendar className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Registration Year</div>
                        <div className='font-bold text-xs text-gray-900'>{CarDetails[0].Model}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BiUser className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Ownership</div>
                        <div className='font-bold text-xs text-gray-900'>{CarDetails[0].Ownership}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><IoMdSpeedometer className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Km Driven</div>
                        <div className='font-bold text-xs text-gray-900'>{CarDetails[0]["Km Driven"]}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BsFillFuelPumpFill className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Fuel Type</div>
                        <div className='font-bold text-xs text-gray-900'>{CarDetails[0]["Fuel Type"]}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BsCarFront className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Registration In</div>
                        <div className='font-bold text-xs text-gray-900'>{(CarDetails[0]["Registration In"]).slice(0, 2)}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BiSolidColorFill className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Colour</div>
                        <div className='font-bold text-xs text-gray-900'>{CarDetails[0].Colour}</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><GrDocumentVerified className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Insurance</div>
                        <div className='font-bold text-xs text-gray-900'>Comprehensive</div>
                    </div>
                </div>
                <div className='flex'>
                    <div><BsKey className="flex-none mr-2 my-1" /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='text-md font-black text-black'>Spare Key</div>
                        <div className='font-bold text-xs text-gray-900'>YES</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetailTable