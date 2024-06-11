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
import { FaCar, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaGasPump, FaClipboardCheck, FaCogs, FaRoad } from 'react-icons/fa';


const CarPageRelatedCars = (props) => {
    const { relatedCars, assured } = props
    // console.log(relatedCars)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1280 },
            items: 4.5
        },
        desktop: {
            breakpoint: { max: 1280, min: 720 },
            items: 2.98
        },
        tablet: {
            breakpoint: { max: 720, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.25
        }
    }

    return (
        <div className='border bg-white rounded-xl shadow p-4 mb-6'>
            <h3 className='text-base md:text-2xl text-black/80 uppercase'>Cars you may like</h3>
            <Carousel responsive={responsive} className='z-0 my-2'>
                {relatedCars && relatedCars.length > 0 ?
                    relatedCars.map((car, index) => {
                        return (
                            <div className='bg-white mx-1 h-[20rem] md:h-auto max-w-[20rem] rounded shadow' key={index}>
                                <Link
                                    href={{
                                        pathname: `/cars/${(car.lead.brand).replace(/ /g, "_").toLowerCase()}-${(car.lead.varient).replace(/ /g, "_").toLowerCase()}-${(car.lead.model).split(" ").join("").toLowerCase()}-${((car.lead.registration_in).replace(/ /g, "_")).slice(0, 2).toLowerCase()}`,
                                        query: { id: car.lead.id, assured: assured }
                                    }}
                                >
                                    <Image src={car.lead.images[0].image} width={300} height={300} alt="car image" style={{ borderRadius: "1.1rem", height: "170px", objectFit: "cover" }}/>
                                </Link>

                                <div className='changeallcartext' style={{height:'300px'}}>
                                    <div className='justify-start items-center'>
                                        <p className='text-[12px] md:text-sm text-black font-medium font-inter'>Unifi Rating</p>
                                        <Rating name="read-only" value={parseInt(car.lead.engine_rating)} size="small" readOnly />
                                    </div>
                                    <Link
                                        href={{
                                            pathname: `/cars/${(car.lead.brand).replace(/ /g, "_").toLowerCase()}-${(car.lead.varient).replace(/ /g, "_").toLowerCase()}-${(car.lead.model).split(" ").join("").toLowerCase()}-${((car.lead.registration_in).replace(/ /g, "_")).slice(0, 2).toLowerCase()}`,
                                            query: { id: car.lead.id, assured: assured }
                                        }}
                                        className='md:px-2 group/link'
                                    >
                                        <div>
                                            <h4 className='text-sm md:text-base group-hover/link:text-blue-900'>{car.lead.model} {car.lead.brand}</h4>
                                            <p className='text-xs md:text-sm font-normal text-black/80'>{car.lead.varient}</p>
                                            <div className='pt-1 flex lg:items-center justify-between flex-col lg:flex-row'>
                                                <div>
                                                    <img src={`/${assured == 1 ? "button assured" : "button"}.png`} className='w-36' />
                                                </div>
                                                ₹ {(parseInt(car.lead.selling_amount)).toLocaleString("en-IN")}
                                            </div>
                                        </div>
                                    </Link>
                                        {parseInt(car.lead.refurbished_price) ?  
                                            <div className='relative' style={{marginTop: "-20px"}}>
                                                <div className='flex lg:items-center justify-between flex-col lg:flex-row'>
                                                    <div className=''>
                                                        <a onClick={() => setIsOpen(true)} style={{'cursor':'pointer'}}><img width="122" src="/assured.png" alt="info--v1" style={{marginRight: "15px"}}/></a></div>
                                                        <p>₹ {(parseInt(car.lead.refurbished_price)).toLocaleString("en-IN")}</p>
                                                    </div>
                                            </div>
                                            : ''}
                                    <Link
                                        href={{
                                            pathname: `/cars/${(car.lead.brand).replace(/ /g, "_").toLowerCase()}-${(car.lead.varient).replace(/ /g, "_").toLowerCase()}-${(car.lead.model).split(" ").join("").toLowerCase()}-${((car.lead.registration_in).replace(/ /g, "_")).slice(0, 2).toLowerCase()}`,
                                            query: { id: car.lead.id, assured: assured }
                                        }}
                                        className='md:px-2' 
                                    >
                                        {/* <div className='flex justify-start gap-2 items-center'>
                                            <p className='text-[12px] md:text-sm text-black/60'>Engine</p>
                                            <Rating name="read-only" value={parseInt(car.lead.engine_rating)} size="small" readOnly />
                                        </div> */}
                                        <div className='flex pt-2 gap-4 justify-between text-black/60 text-[10px] md:text-sm'>
                                            {/* <p>{((car.lead.km_driven).split(' '))[0]} km</p>
                                            <p>{((car.lead.ownership).split(" "))[0]}</p>
                                            <p>{car.lead.engine_type}</p>
                                            <p>{(car.lead.registration_in).slice(0, 2)}</p> */}
                                            <div className="grid grid-cols-3 gap-1 text-xs">
                                                <div className="flex items-center space-x-2">
                                                <FaGasPump />
                                                <span>{car.lead.engine_type}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                <FaRoad />
                                                <span>{((car.lead.km_driven).split(' '))[0]}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                <FaMapMarkerAlt />
                                                <span>{(car.lead.registration_in).slice(0, 2)}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                <FaClipboardCheck />
                                                <span>Rc-Original</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                <FaCar />
                                                <span>{car.lead.registration_in}****</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                <FaCalendarAlt />
                                                <span>{car.lead.manufacturing_date}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                <FaCogs />
                                                <span>{car.lead.transmission}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                <FaUser />
                                                <span>{car.lead.ownership}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }) : <></>
                }
            </Carousel>
        </div>
    )
}

export default CarPageRelatedCars