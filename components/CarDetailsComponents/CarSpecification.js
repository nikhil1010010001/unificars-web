import React from 'react'
import { TiTick } from 'react-icons/ti';

const CarSpecification = (props) => {

  const { CarSpecific } = props

  return (
    <div>

      {CarSpecific && CarSpecific.length > 0 ? <><div className='border bg-white rounded-xl  opacity-80 shadow'>

        <h2 className="p-4 pb-0 text-lg uppercase">specifications</h2>
        <div className='px-4'>
          <div className='border border-gray-100 my-4 p-4 rounded-xl'>
            <h4 className='uppercase mb-3 text-base text-[#e38102] border-b-[1px]'>engine and tranmission</h4>
            <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal'>
              {CarSpecific && CarSpecific.length > 0 ? Object.values(CarSpecific[0].engine_and_tranmission).map((e, idx) => {
                return <div className='flex gap-2 items-center' key={idx}>
                  <div className='flex gap-1 flex-col lg:flex-row flex-wrap'>{Object.values(e).map((e, index) => { return <p className={`whitespace-nowrap ${index % 2 == 0 ? "text-black/" : ""}`} key={index}>{e}{index % 2 == 0 ? " :" : ""} </p> })}</div>
                </div>
              }) : <></>}
            </div>
          </div>

          <div className='border border-gray-100 my-4 p-4 rounded-xl'>
            <h4 className='uppercase mb-3 text-base text-[#e38102] border-b-[1px]'>dimensions and capacity</h4>
            <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal'>
              {CarSpecific && CarSpecific.length > 0 ? Object.values(CarSpecific[0].dimensions_and_capacity).map((e, idx) => {
                return <div className='flex gap-2 items-center' key={idx}>
                  <div className='flex gap-1 flex-col lg:flex-row  flex-wrap'>{Object.values(e).map((e, index) => { return <p className={`whitespace-nowrap ${index % 2 == 0 ? "text-black/" : ""}`} key={index}>{e}{index % 2 == 0 ? " :" : ""} </p> })}</div>
                </div>
              }) : <></>}
            </div>
          </div>

          <div className='border border-gray-100 my-4 p-4 rounded-xl'>
            <h4 className='uppercase mb-3 text-base text-[#e38102] border-b-[1px]'>miscellaneous</h4>
            <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal'>
              {CarSpecific && CarSpecific.length > 0 ? Object.values(CarSpecific[0].miscellaneous).map((e, idx) => {
                return <div className='flex gap-2 items-center' key={idx}>
                  <div className='flex gap-1 flex-col lg:flex-row flex-wrap'>{Object.values(e).map((e, index) => { return <p className={`whitespace-nowrap ${index % 2 == 0 ? "text-black/" : ""}`} key={index}>{e}{index % 2 == 0 ? " :" : ""} </p> })}</div>
                </div>
              }) : <></>}
            </div>
          </div>
        </div>
      </div>
      </> : <></>}

    </div>
  )
}

export default CarSpecification