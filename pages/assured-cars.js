import React, { useEffect, useState } from 'react'

const Assured = () => {

   
    return (
        <div className=''>
            <div className='relative' style={{paddingTop:'85px'}}>
                <div><img src='/assuredfix.png' className='w-[100%]'/></div>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4 mt-16 lg:mt-24 md:px-20 px-10'>
                <div className="text-3xl font-bold text-black">
                    <h2 className='py-2' >Unifi <span className='text-green-600' >Assured </span>Fix </h2>
                    <p className='text-lg text-black-600 my-2'>Unifi Assured Fix is our premium service designed to provide peace of mind when you purchase a used car from Unifi. We understand the importance of reliability and performance in your vehicle, which is why we offer this comprehensive fixing service to ensure your car is in optimal condition.</p>
                </div>
                <div className="line"><img src={"/assured1.png"} alt="" className='w-[80%] mx-auto'/></div>
            </div>

            <div>
                <div className="container mx-auto p-6 md:px-20">
                    <div className="mb-12 font-bold text-center">
                        <h2 className="text-4xl text-black">What is Unifi <span className='text-green-600' >Assured </span> Fix?</h2>
                        <p className='text-sm text-black-600 my-2'>Unifi Assured Fix is a commitment to quality and customer satisfaction. When you purchase a used car from Unifi, you automatically qualify for this service, which includes</p>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto my-4">
                            <div className="">
                            <img src={"/assured2.png"} className='rounded-xl w-[40%] mx-auto' alt="" />
                            </div>
                            <div className="p-4">
                            <div className="">
                                <div className="font-bold text-black">
                                <h2 className='py-2 text-2xl'>Assured Warranty</h2>
                                </div>
                                <p className='text-base font-bold text-black my-2'>
                                At Unifi, we stand by the quality of our used cars with our Assured Warranty. Every vehicle purchased comes with an extensive warranty that covers key components, ensuring that you are protected against unexpected repair costs. Drive with peace of mind knowing that your investment is secure and that Unifi is here to support you with reliable service.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto my-4">
                            <div className="p-4">
                                <div className="">
                                    <div className="font-bold text-black">
                                    <h2 className='py-2 text-2xl'>Free Accessories</h2>
                                    </div>
                                    <p className='text-base font-bold text-black my-2'>
                                    Enhance your driving experience with our Free Accessories package. When you purchase a used car from Unifi, you receive a range of complimentary accessories tailored to your vehicle. From floor mats to seat covers, our accessories are designed to add convenience, comfort, and style to your ride. Enjoy the extra perks at no additional cost and drive away in a fully equipped car.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <img src={"/assured6.png"} className='rounded-xl w-[40%] mx-auto' alt="" />
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto my-4">
                            <div className="">
                            <img src={"/assured5.png"} className='rounded-xl w-[40%] mx-auto' alt="" />
                            </div>
                            <div className="p-4">
                            <div className="">
                                <div className="font-bold text-black">
                                <h2 className='py-2 text-2xl'>Insurance</h2>
                                </div>
                                <p className='text-base font-bold text-black my-2'>
                                Your safety and security are our top priorities. That's why we offer comprehensive Insurance coverage with every used car purchase. Our insurance plans are designed to protect you and your vehicle against accidents, theft, and other unforeseen events. Get the coverage you need and drive with confidence, knowing that Unifi has got you covered.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto my-4">
                            <div className="p-4">
                                <div className="">
                                    <div className="font-bold text-black">
                                    <h2 className='py-2 text-2xl'>Pollution Certificate</h2>
                                    </div>
                                    <p className='text-base font-bold text-black my-2'>
                                    At Unifi, we are committed to environmental responsibility. Every car sold comes with a valid Pollution Certificate, ensuring that your vehicle meets all necessary emission standards. Drive with the assurance that your car is eco-friendly and compliant with all regulatory requirements, contributing to a cleaner and healthier environment.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <img src={"/assured4.png"} className='rounded-xl w-[40%] mx-auto' alt="" />
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto my-4">
                            <div className="">
                            <img src={"/assured3.png"} className='rounded-xl w-[40%] mx-auto' alt="" />
                            </div>
                            <div className="p-4">
                            <div className="">
                                <div className="font-bold text-black">
                                <h2 className='py-2 text-2xl'>10,000 km Warranty</h2>
                                </div>
                                <p className='text-base font-bold text-black my-2'>
                                Enjoy an extended 10,000 km Warranty with your used car purchase from Unifi. This warranty covers major mechanical components and ensures that your vehicle remains in excellent condition for the first 10,000 kilometers. Experience worry-free driving with the knowledge that Unifi is dedicated to keeping your car running smoothly.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default Assured