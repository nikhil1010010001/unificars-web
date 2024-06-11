import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import Image from "next/image";
import Rating from '@mui/material/Rating';
import {
    BsSpeedometer,
    BsFuelPumpFill,
    BsFillCarFrontFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const CheckPoint = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1480 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1480, min: 720 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 720, min: 464 },
            items: 2.75
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.75
        }
    }
    return (
        <div className='border bg-white rounded-xl shadow'>
            <h3 className='text-xl p-4 pb-0 text-black/70'>Why Choose Us</h3>
            <Carousel responsive={responsive} className='z-0 my-2'>
                <div className='flex flex-col m-4 items-center rounded-xl
                '>
                    <img className='aspect-auto w-28' src='/points/assistance.png' />
                    <div className='absolute bottom-5 text-[#f38102]'>Road Side Assistance</div>
                </div>
                <div className='flex flex-col m-4 items-center rounded-xl
                '>
                    <img className='aspect-auto w-28' src='/points/finance.png' />
                    <div className='absolute bottom-5 text-[#f38102]'>Easy Finance</div>
                </div>
                <div className='flex flex-col m-4 items-center rounded-xl
                '>
                    <img className='aspect-auto w-28' src='/points/inpected_points.png' />
                    <div className='absolute bottom-5 text-[#f38102]'>210 Inspected Point</div>
                </div>
                <div className='flex flex-col m-4 items-center rounded-xl
                '>
                    <img className='aspect-auto w-28' src='/points/price.png' />
                    <div className='absolute bottom-5 text-[#f38102]'>Fixed Price</div>
                </div>
                <div className='flex flex-col m-4 items-center rounded-xl
                '>
                    <img className='aspect-auto w-28' src='/points/transfer.png' />
                    <div className='absolute bottom-5 text-[#f38102]'>Free RC Transfer</div>
                </div>
                <div className='flex flex-col m-4 items-center rounded-xl
                '>
                    <img className='aspect-auto w-28' src='/points/warranty.png' />
                    <div className='absolute bottom-5 text-[#f38102]'>3 Months Warranty</div>
                    </div>
            </Carousel>
        </div>
    )
}

export default CheckPoint