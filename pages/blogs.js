import Link from 'next/link'
import React from 'react'

const blog = () => {

    const blogImages = [
        {
            "image": "b1.jpg",
            "head": "Complete Guide to Buying a Used Car",
            "date": "March 22 "
        },
        {
            "image": "b2.jpg",
            "head": "Top 10 Selling used Cars in India with Car Price",
            "date": "March 22 "
        },
        {
            "image": "b3.jpg",
            "head": "How to Sell Used Cars Online at Best Prices with Us?",
            "date": "Feburary 28 "
        },
        {
            "image": "b4.jpg",
            "head": "Why should you buy a used car?",
            "date": "May 22 "
        },
        {
            "image": "b5.jpg",
            "head": "Top 10 family cars in India",
            "date": "May 22 "
        },
        {
            "image": "b6.avif",
            "head": "Car Segments Of India",
            "date": "May 28 "
        },
        {
            "image": "b7.jpg",
            "head": "Maruti Suzuki Baleno - A Mid-Budget Family Car",
            "date": "June 28    "
        },
        {
            "image": "b8.jpg",
            "head": "BEST HATCHBACKS IN INDIA",
            "date": "June 08 "
        },
        {
            "image": "b9.jpg",
            "head": "Fuel efficient cars in India 2023",
            "date": "June 14 "
        },
        {
            "image": "b10.png",
            "head": "Top 10 cars for beginners",
            "date": "June 20 "
        },
        {
            "image": "b11.png",
            "head": "Honda amaze vs Maruti Suzuki Dzire",
            "date": "June 23 "
        },
        {
            "image": "b12.png",
            "head": "Pick Pay Drive Simplified steps for buying car",
            "date": "January 24 "
        },
        {
            "image": "b13.png",
            "head": "Driving Smart Unlocking the Secrets of High Resale Value in Used Cars",
            "date": "January 24 "
        },
        {
            "image": "b14.png",
            "head": "How to maintenance your preowned car",
            "date": "January 24 "
        },
        {
            "image": "b15.png",
            "head": "Ideal time to purchase car in India",
            "date": "January 30 "
        },
        {
            "image": "b16.png",
            "head": "Demo Cars",
            "date": "January 30 "
        },
        {
            "image": "b17.png",
            "head": "Best 10 cars in India (2023)",
            "date": "January 30 "
        },
        {
            "image": "b18.png",
            "head": "Decoding car Chassis",
            "date": "January 30 "
        }  
    ]
    return (
        <div>
            <div className='w-full relative'>
                <img src='/background/blogbanner.png'  className='h-72 object-cover md:w-full md:h-auto'/>
                <div className='absolute top-0 flex-col gap-4 text-white h-full flex justify-center items-center w-full text-center'>

                    <p className='tracking-widest text-sm p-2'>YOU WON'T JUST LOVE OUR CARS, YOU'LL LOVE THE WAY YOU BUY THEM.</p>
                    <p className='text-4xl'>Welcome To Unifi Car Blogs</p>
                    <img src='/home/title_line.png' />

                </div>
            </div>


            <div className='mt-24'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl text-blue-950 my-2'>LATEST BLOGS</h1>
                    <img src='/home/title_line.png' />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto my-12 gap-8 '>
                {
                    blogImages.map((e, index) => {
                        return (
                            <div key={index} className='bg-blue-50/50 rounded shadow'>
                                <div className='h-44'>
                                    <img src={`./blogs/${e.image}`} className='h-full w-full' />
                                </div>
                                <div className='my-2 p-4 px-2'>
                                    <Link href={`/blog/${((e.head).split(" ")).join("-")}`} className='text-2xl text-blue-950'>{e.head}</Link>
                                    <div className='flex justify-between items-center my-2'>
                                        <p className='text-sm text-gray-500'>Team Unifi Cars</p>
                                        <p className='text-sm text-gray-500'>{e.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default blog