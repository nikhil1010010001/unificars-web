import React, { useEffect, useState } from 'react'
import FilterCars from "../components/cars-listing/FilterCars"
import AllCars from '@/components/cars-listing/AllCars';
import BuyCarSearchFilter from "@/components/cars-listing/BuyCarSearchFilter";
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Head from 'next/head';


const Assured = () => {
    const [carListing, setCarListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gridView, setGridView] = useState(true)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1280 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1280, min: 720 },
            items: 3
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

    const fetchCarList = async () => {
        setLoading(true)
        const fecthCars = await fetch("https://crm.unificars.com/api/filtersassuredsidebar")
        const jsonData = await fecthCars.json()
        if (jsonData.code == 200) {
            setLoading(false)
            setCarListing(jsonData.data.auction)
            // console.log(jsonData.data.auction,"assured images")
        }
    };


    return (
        <>

            <Head>
                <title>Get Assured used cars from Unifi Cars - One year warranty</title>
                <meta name='description' content='Assured Used Cars with one year warranty from Unifi Cars. 210 point inspection, 3 car services free.
                Get Easy Finance Options. Book Test Drive Today.' />
                                <meta name="keywords" content="Unificars, Unifi Cars, Assured Cars, used cars in moti nagar, One Year Warranty, Buy use Car in delhi, Buy Unificars Used Car, buy used car in moti nagar, Unificars Certified Cars, used car,
                used cars, buy used car, buy used cars, buy second hand cars, buy a used car, certified used car, inspected used car, used car in kirti nagar, buy used car online"/>
            </Head>



            <div className='lg:grid grid-cols-11 pt-4 bg-gray-100/10' style={{paddingTop:'90px'}}>
                <div className="overflow-y-scroll h-[100vh] hidden lg:block sticky top-0 col-span-2" id="filter">
                    <BuyCarSearchFilter setCarListing={setCarListing} setLoading={setLoading} filterUrl={'https://crm.unificars.com/api/filtersassuredsidebar'} />
                </div>
                <div className='col-span-9'>
                
                    <div className='p-2 lg:px-8'>
                        <Carousel responsive={responsive} className='z-0 my-2'>
                            {/* className='p-2 grid grid-cols-1 gap-2 md:gap-4 md:justify-around md:grid-cols-3 lg:px-8' */}
                            <Image src={"/banners/assured1.png"} priority={1} alt='banners' width={500} height={200} className='pl-2 pr-2' />
                            <Image src={"/banners/assured2.png"} priority={1} alt='banners' width={500} height={200} className='pl-2 pr-2' />
                            <Image src={"/banners/assured3.png"} priority={1} alt='banners' width={500} height={200} className='pl-2 pr-2' />
                        </Carousel>
                    </div>
                  
                    <div className='min-h-screen'>
                        <FilterCars gridView={gridView} setGridView={setGridView} setCarListing={setCarListing}  setLoading={setLoading} filterUrl={'https://crm.unificars.com/api/filtersassuredsidebar'} />
                        <AllCars carListing={carListing} gridView={gridView} loading={loading}  imageLink={'button assured'} assured={1} folder={"assured"} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Assured

