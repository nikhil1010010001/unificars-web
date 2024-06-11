import React, { useEffect, useRef, useState } from 'react'
import PopularBrand from "@/components/SellPageModal/PopularBrand"
import HowItWork from "@/components/CarDetailsComponents/HowItWork"
import AskQuestions from "@/components/Home/AskQuestions"
import SellModal from '@/components/SellPageModal/SellModal'
import CheckValue from '@/components/SellPageModal/CheckValue'
import UserBookSlot from '@/components/SellPageModal/UserBookSlot'
import { useRouter } from 'next/router'
import VehicleInfo from '@/components/NewComponents/VehicleInfo'    

const sellCars = () => {

    const [OpenModal, setOpenModal] = useState(false)
    const [UserCar, setUserCar] = useState({ "brand": { "name": "", "id": "" }, "model": { "name": "", "id": "" }, "varient": { "name": "", "id": "" }, "year": "", "ownerShip": "", "fuelType": "", "kmDriven": "", "location": "" })
    const arr = new Array(7)
    const [UserCarTabArray, setUserCarTabArray] = useState(arr)
    const [CurrentTab, setCurrentTab] = useState("0")
    const [UserNumber, setUserNumber] = useState("")

    const router = useRouter()


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
                <VehicleInfo />
                <div className='text-center items-center flex flex-col mt-12'>
                    <p className='tracking-widest text-gray-600 text-lg'>SELL YOUR CAR WITH NO FUSS</p>
                    <h2 className='text-4xl text-[#f38102] my-2'>Sell Your Car At Best Price Instantly From Home</h2>
                    <img src='/home/title_line.png' alt="line" />

                    <h3 className='text-2xl uppercase tracking-wide text-blue-950 my-6'>Let's select your car brand</h3>
                </div>
                {!verifyNum ?
                    <div className='mb-4'>
                        {/* <PopularBrand setOpenModal={setOpenModal} setUserCarTabArray={setUserCarTabArray} UserCarTabArray={UserCarTabArray} OpenModal={OpenModal} UserCar={UserCar} setUserCar={setUserCar} CurrentTab={CurrentTab} setCurrentTab={setCurrentTab} /> */}
                    </div>
                    : <><CheckValue setlast_id={setlast_id} UserNumber={UserNumber} setUserNumber={setUserNumber} UserCar={UserCar} BookSlot={BookSlot} setBookSlot={setBookSlot} bookingRef={bookingRef} /> </>}

                <div className='my-4' ref={bookingRef}>
                    {BookSlot ? <><UserBookSlot last_id={last_id} /> </> : <></>}
                </div>


                <div>
                    <HowItWork />
                    <AskQuestions />
                </div>

                {/* modal starts here  */}
                {/* <div>
                    <SellModal setUserCarTabArray={setUserCarTabArray} UserCarTabArray={UserCarTabArray} OpenModal={OpenModal} setOpenModal={setOpenModal} UserCar={UserCar} setUserCar={setUserCar} CurrentTab={CurrentTab} setCurrentTab={setCurrentTab} setVerifyNum={setVerifyNum} />
                </div> */}
            </div>
        </>
    )
}

export default sellCars