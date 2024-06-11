import React, { useEffect, useRef, useState } from 'react'
import dynamic from "next/dynamic";

import PopularBrand from "@/components/SellPageModal3/PopularBrand"
import HowItWork from "@/components/CarDetailsComponents/HowItWork"
import AskQuestions from "@/components/Home/AskQuestions"
import SellModal from '@/components/SellPageModal3/SellModal'
import CheckValue from '@/components/SellPageModal3/CheckValue'
import UserBookSlot from '@/components/SellPageModal3/UserBookSlot'


const Howtosell = dynamic(() => import("@/components/Home/Howtosell"),{ssr: false});
const VehicleInfo = dynamic(() => import("@/components/NewComponents/VehicleInfo2"),{ssr: false});

import { useRouter } from 'next/router'
import Head from 'next/head'


const sellCars = () => {


    const [OpenModal, setOpenModal] = useState(false)
    const [UserCar, setUserCar] = useState({ "brand": { "name": "", "id": "" }, "model": { "name": "", "id": "" }, "varient": { "name": "", "id": "" }, "year": "", "ownerShip": "", "fuelType": "", "kmDriven": "", "location": "" })
    const arr = new Array(7)
    const [UserCarTabArray, setUserCarTabArray] = useState(arr)
    const [CurrentTab, setCurrentTab] = useState("0")
    const [UserNumber, setUserNumber] = useState("")

    const router = useRouter()

    const title = "Sell Cars Online at Best Prices Get Instant Payment |Unificars";
    const description = "Sell Used Car Fast and Get Best Price with Unificars! Call - 9911771977 Now. Get Best deals with Free RC transfer, Doorstep Pickup with Instant Payment";
    const canonicalUrl = "https://unificars.com/sell-used-cars";


    useEffect(() => {
        if (router.query.brand && router.query.id) {

            setUserCar({ ...UserCar, brand: {name:router.query.brand ,id:router.query.id} });
            console.log({ ...UserCar, brand: router.query.brand })
            UserCarTabArray[0] = router.query.brand;
            setUserCarTabArray([...UserCarTabArray])
            setOpenModal(true);
            setCurrentTab("1")
        }
    }, [router])


    const [last_id, setlast_id] = useState(null)
    const [verifyNum, setVerifyNum] = useState(false)
    const [BookSlot, setBookSlot] = useState(false)

    const bookingRef = useRef();
    return (
        <>
            <div>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                
                <div className='text-center items-center flex flex-col' style={{paddingTop:'120px'}}>
                    {/* <p className='tracking-widest text-gray-600 text-lg'>SELL YOUR CAR WITH NO FUSS</p> */}
                    <h1 className='text-4xl text-black my-2'>Sell Your Car At Best Price Instantly From Home</h1>
                    {/* <img src='/home/title_line.png' alt="line" /> */}

                    <h3 className='text-2xl uppercase tracking-wide text-blue-950 my-6'>Let's select your car brand</h3>
                </div>
                {/* {!verifyNum ?
                    <div className='mb-4'>
                        <PopularBrand setOpenModal={setOpenModal} setUserCarTabArray={setUserCarTabArray} UserCarTabArray={UserCarTabArray} OpenModal={OpenModal} UserCar={UserCar} setUserCar={setUserCar} CurrentTab={CurrentTab} setCurrentTab={setCurrentTab} />
                    </div>
                    : <><CheckValue setlast_id={setlast_id} UserNumber={UserNumber} setUserNumber={setUserNumber} UserCar={UserCar} BookSlot={BookSlot} setBookSlot={setBookSlot} bookingRef={bookingRef} /> </>}

                <div className='my-4' ref={bookingRef}>
                    {BookSlot ? <><UserBookSlot last_id={last_id} /> </> : <></>}
                </div> */}

                <div className='container mx-auto w-[70%] mb-6'>
                    <VehicleInfo />
                </div>

                <div>
                    {/* <HowItWork /> */}
                    <Howtosell/>
                    <AskQuestions />
                </div>

                {/* modal starts here  */}
                <div>
                    <SellModal setUserCarTabArray={setUserCarTabArray} UserCarTabArray={UserCarTabArray} OpenModal={OpenModal} setOpenModal={setOpenModal} UserCar={UserCar} setUserCar={setUserCar} CurrentTab={CurrentTab} setCurrentTab={setCurrentTab} setVerifyNum={setVerifyNum} />
                </div>
            </div>
        </>
    )
}

export default sellCars