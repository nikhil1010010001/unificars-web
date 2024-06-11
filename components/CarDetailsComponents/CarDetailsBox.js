import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCardChecklist, BsCashCoin, BsWhatsapp } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

const CarDetailsBox = (props) => {
    const {car ,showModal ,setShowModal , setShowEnquiryModal ,id}=props
    console.log(car)

    
    return (
        <div className='p-4 mx-4 bg-white rounded-xl lg:mx-0 border border-black/10 font-light shadow'>
            <div>
                <h1 className="font-semibold text-xl mb-1 tracking-wide"> {car && car.lead ? car.lead[0]["Model"] : ""}  {car && car.lead ? car.lead[0]["Brand"] : "Brand"}  </h1> 
                <p className='text-xs mb-2 text-black/70'>{car && car.lead ? (car.lead[0]).varient : ""}</p>
                <span className="font-semibold text-base text-black/90">₹ {car && car.lead ? (parseInt(car.lead[0]["Amount"])).toLocaleString("en-IN") : "..."}</span><br/>
                <span className="font-semibold text-base text-black/90">Asssured Price - ₹ {car && car.lead ? (parseInt(car.lead[0]["refurbished_price"])).toLocaleString("en-IN") : "..."}</span>

            </div>
            <hr className='mt-2'/>
            <div className='flex flex-wrap justify-start gap-2 my-4 text-black/80 text-sm'>

                <div className='rounded-xl p-2 bg-gray-200/60'>
                    {(car.lead[0])["Km Driven"]}
                </div>
                <div className='rounded-xl p-2 bg-gray-200/60 '>
                    {(car.lead[0])["Ownership"]}
                </div>
                <div className='rounded-xl p-2 bg-gray-200/60'>
                    {(car.lead[0])["Fuel Type"]}
                </div>
                <div className='rounded-xl p-2 px-4 bg-gray-200/60 '>
                    {((car.lead[0])["Registration In"]).slice(0, 2)}
                </div>
            </div>

            <div className='flex flex-col gap-3 text-sm border-b-2 p-2'>
                <div className='flex items-center'><BsCashCoin className='mr-2 text-[#f38102]' /><p className="font-semibold tracking-wider">Free Rc transfer</p></div>
                <div className='flex items-center'><TiTick className='mr-2 text-[#f38102]' /><p className="font-semibold tracking-wider">Hassle free documentation</p></div>
                <div className='flex items-center'><BsCardChecklist className='mr-2 text-[#f38102]' /><p className="font-semibold tracking-wider">210+ point inspected</p></div>
                <div className='cursor-pointer text-[green] hover:text-green-600 active:text-green-700'><a className='flex items-center' href={`https://wa.me/+919911771977?text=Hey Unificars  I want to buy ${car.lead[0].Brand} ${car.lead[0].Colour} ${car.lead[0].Model} ${car.lead[0].Ownership} containing ${car.lead[0].unique_code}`} target="_blank"><BsWhatsapp className='mr-2' /><p className="font-semibold tracking-wider">Connect on Whatsapp</p> <AiOutlineArrowRight className="my-1 mx-1" /></a></div>
            </div>


            <div className='grid grid-cols-2 text-center my-2'>
                    {/* <button className="flex transition-all col-span-2 justify-center hover:scale-105 w-full duration-200 text-base border border-[#f38102] hover:text-[#f38102] text-white bg-[#f38102] hover:bg-white p-3 font-normal items-center shadow rounded" onClick={() => setShowModal(!showModal)}><BsCardChecklist className="mr-2"/> <p className='tracking-widest'>Download Free Inpection Report Now</p> </button>   */}
                <div className="flex justify-between gap-2 my-2 col-span-2">
                    <button className="flex transition-all justify-center hover:scale-105 w-full duration-200 p-2 border border-[#f38102] text-[#f38102] hover:text-white hover:bg-[#f38102] font-normal items-center shadow text-sm rounded" onClick={() => setShowEnquiryModal(true)}>
                    <div>
                    <p className='text-base tracking-widest'>Book Now</p> 
                    <p className='text-[10px] p-0'>100% Refundable</p> 
                    </div>
                    </button>  

                </div>


            </div>
        </div>
    )
}

export default CarDetailsBox