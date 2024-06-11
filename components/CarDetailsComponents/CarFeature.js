import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TiTick } from 'react-icons/ti';
import { useEffect } from 'react';

const CarDetailTable = (props) => {

    const { CarFeature } = props;


    return (
        <div>
            {CarFeature && CarFeature.length > 0 ? <><div className='border bg-white rounded-xl  opacity-80 uppercase shadow'>
                <h2 className="p-4 text-lg">Features</h2>


                <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal pb-8'>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].comfort_and_convenience[0].name ?CarFeature[0].comfort_and_convenience[0].name :""}</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].comfort_and_convenience[1].name ?CarFeature[0].comfort_and_convenience[1].name:""}</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].comfort_and_convenience[2].name ? CarFeature[0].comfort_and_convenience[2].name:""}</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].interior[0].name ?CarFeature[0].interior[0].name:""}</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].interior[1].name ?CarFeature[0].interior[1].name :""}</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].exterior[0].name ?CarFeature[0].exterior[0].name:""}</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].exterior[1].name ?CarFeature[0].exterior[1].name:""}</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].safety[0].name ?CarFeature[0].safety[0].name:""}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                        <p>{CarFeature && CarFeature[0].safety[1].name ?CarFeature[0].safety[1].name:""}</p>
                    </div>
                </div>


                <Accordion className='mb-4 mx-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h3 className='text-[#f38102] hover:text-orange-600'>View all Features</h3>
                    </AccordionSummary>
                    <div className='px-4 mb-4'>
                        <Accordion className=''>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h3>Comfort and Convenience</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal pb-8'>
                                    {CarFeature && CarFeature.length > 0 ? CarFeature[0].car_details.name.map((e, index) => {
                                        return <div className='flex gap-2 items-center ' key={index}>
                                            <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                                            <p>{e.name}</p>
                                        </div>

                                    }) : <></>}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className=''>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h3>Exterior</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal pb-8'>
                                    {CarFeature && CarFeature.length > 0 ? CarFeature[0].exterior.map((e, index) => {
                                        return <div className='flex gap-2 items-center ' key={index}>
                                            <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                                            <p>{e.name}</p>
                                        </div>

                                    }) : <></>}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className=''>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h3>Interior</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal pb-8'>
                                    {CarFeature && CarFeature.length > 0 ? CarFeature[0].interior.map((e, index) => {
                                        return <div className='flex gap-2 items-center ' key={index}>
                                            <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                                            <p>{e.name}</p>
                                        </div>

                                    }) : <></>}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className=''>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h3>Safety</h3>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='grid grid-cols-2 gap-8 w-11/12 mx-auto md:grid-cols-3 text-xs md:text-sm font-normal pb-8'>
                                    {CarFeature && CarFeature.length > 0 ? CarFeature[0].safety.map((e, index) => {
                                        return <div className='flex gap-2 items-center ' key={index}>
                                            <p className='flex-none text-lg text-green-500 md:text-xl'><TiTick /></p>
                                            <p>{e.name}</p>
                                        </div>

                                    }) : <></>}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Accordion>
            </div></> : <></>}
        </div>


    )
}

export default CarDetailTable



