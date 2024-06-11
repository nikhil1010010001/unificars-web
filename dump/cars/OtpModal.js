import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal, { modalClasses } from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import {  useState } from 'react';
import { useRouter } from 'next/router';

const style = {
  position: 'absolute',
  top: '50%',
  borderRadius: '1rem',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
};

export default function TransitionsModal(props) {

    const router =useRouter()


    const [progress, setProgress] = useState(0);

  const { showModal, setShowModal, carId } = props
  const [UserNumber, setUserNumber] = useState("")
  const [Otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [OtpLoader, setOtpLoader] = useState(false)
  const [optNotRevieve, setOptNotRevieve] = useState(false)
  const [messages, setMessage] = useState({})
  const [ToggleNumberTabAfterOtpRecevied, setToggleNumberTabAfterOtpRecevied] = useState(false)

  const handleClose = () => {
    setUserNumber("")
    setOtp('')
    setLoading(false)
    setOtpLoader(false)
    setOptNotRevieve(false)
    setToggleNumberTabAfterOtpRecevied(false)
    setShowModal(false);
    setMessage({})
  }

  const sendOtp=async()=>{
    const data = {
      mobile: UserNumber,
      lead_id: carId
    }
    const url = `https://crm.unificars.com/api/webotp`
   const resdata= await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    })
    return resdata
  }


  const HandleReSendOtp=async()=>{
    const fetchOtpRes = await sendOtp()
      const jsonResponse = await fetchOtpRes.json()
      if (jsonResponse) {
          setOptNotRevieve(true)
        }
  }

  const HandleFormNumberSubmit = async (e) => {
    e.preventDefault()
    if (UserNumber.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)) {
      setLoading(true)
      const fetchOtpRes = await sendOtp()
      const jsonResponse = await fetchOtpRes.json()
      if (jsonResponse.code == 200) {
        // setting message to empty before showing otp modalClasses
        setMessage({})
        setLoading(false)
        setToggleNumberTabAfterOtpRecevied(true)
      } else {
        setMessage(jsonResponse)
        setLoading(false)
      }
    }
    else {
      setLoading(false)
      setMessage({ code: 400, status: ["Please Enter a Valid Number"] })
    }
  }


  const HandleFormOtpVerifySubmit = async (e) => {
    e.preventDefault()
    if (Otp != "") {
      const data = {
        mobile: UserNumber,
        lead_id: carId,
        otp: Otp
    }
    setOtpLoader(true)
    const url = `https://crm.unificars.com/api/webotpverify`
    const fetchOtpRes = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
    })
    const jsonResponse = await fetchOtpRes.json()
    if(jsonResponse.code==200){
      setMessage(jsonResponse)
      if(jsonResponse.link){
        setMessage({code:200, status:["Please Wait while Fecthing a Report..."]})
        router.push(jsonResponse.link)

        setInterval(() => {
          setProgress(pre=>pre+20)
          if(progress+20 === 100){
            clearInterval(interval);
          }
        }, 1000);

        setTimeout(() => {
          handleClose()
          setOtpLoader(false)
          setUserNumber("")
          setOtp("")
        }, 5000);
      }
    }  else{
      setOtpLoader(false)
      setMessage(jsonResponse)
    }
    }
  }

  return (
    <div>
      {/* <Modal
       
      > */}
      {!ToggleNumberTabAfterOtpRecevied ?
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}>
          <Fade in={showModal}  >
            <Box sx={style} className="w-4/5 md:w-3/6 h-3/5">
              <div className='absolute top-4 right-4'>
                <IoIosCloseCircleOutline onClick={handleClose} className='text-2xl cursor-pointer' />
              </div>

              <div className='flex flex-col items-center bg-red-400s justify-center w-full h-full rounded-xl bg-gradient-radial  from-blue-50 to-blue-100 text-gray-600'>
                <h1 className='text-center text-xl md:text-4xl uppercase'>Enter Your Mobile Number</h1>
                <h4 className='text-center text-base md:text-xl'>To Download Full Report</h4>
                <form className='flex flex-col items-center justify-center w-full mt-8' onSubmit={HandleFormNumberSubmit}>
                  <input placeholder='ENTER YOUR PHONE NUMBER' maxLength={10} type='number' className='border text-xl shadow focus:outline-none rounded-xl w-10/12 p-4 ' value={UserNumber} onChange={(e) => {setMessage({}); setUserNumber(e.target.value) }} />
                 
                 {/* displaying Message after geeting response */}
                 {messages && messages.code? <div className={`${messages.code==200?"text-green-500":"text-red-500"}`}>{messages.status.map((message, index) => { return <p className="text-sm" key={index} >{message}</p> })} </div>:<></>}

                  <Box sx={{ m: 1, position: 'relative' }} className="w-4/5 justify-center flex">
                    <Button
                      variant="contained"
                      className='p-2 shadow mt-6 bg-green-500 hover:bg-green-500  text-base md:text-xl rounded-xl w-full px-6 text-white'
                      disabled={loading}
                      // onClick={handleButtonClick}
                      type='submit'
                    >
                      SEND OTP
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginLeft: '-12px',
                        }}
                      />                    
                    )}
                  </Box>
                  
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
        :
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}>
          <Fade in={showModal}  >
            <Box sx={style} className="w-4/5 md:w-3/6 h-3/5">
              <div className='absolute top-4 right-4'>
                <IoIosCloseCircleOutline onClick={handleClose} className='text-2xl cursor-pointer' />
              </div>
              <div className='flex flex-col items-center bg-red-400s justify-center w-full h-full rounded-xl bg-gradient-radial  from-blue-50 to-blue-100 text-gray-600'>
                <h1 className='text-center text-2xl uppercase tracking-wider'>PLEASE ENTER YOUR OTP</h1>
                <h4 className='text-center text-xs text-green-500'>The OTP has send to ******{UserNumber.slice(6,)}</h4>
                <p className='text-center text-xs'>Not Your Number? <button className='text-blue-500' onClick={()=>{setUserNumber("");setToggleNumberTabAfterOtpRecevied(false)}}>{" "}click here</button></p>
                <form className='flex flex-col items-center justify-center w-full mt-8' onSubmit={HandleFormOtpVerifySubmit}>
                  <input placeholder='ENTER OTP' maxLength={6} className='border text-base md:text-xl shadow focus:outline-none rounded-xl w-10/12 p-4 ' value={Otp} onChange={(e) => {setMessage({}); setOtp(e.target.value) }} />
                 
                 {/* Handling if otp is not recieve  */}
                {!optNotRevieve?<p>Did n't Recieve OTP <button className='text-blue-500' onClick={()=>{HandleReSendOtp()}}> Click Here</button></p>:<p>Still Not Recieve  <button className='text-red-500' onClick={()=>{setUserNumber("");setToggleNumberTabAfterOtpRecevied(false);setOptNotRevieve(false)}}>Please Click Here</button></p>}
                 
                  {messages && messages.code? <div className={`${messages.code==200?"text-green-500":"text-red-500"}`}>{messages.status.map((message, index) => { return <p className="text-sm" key={index} >{message}</p> })} </div>:<></>}
                  <Box sx={{ m: 1, position: 'relative' }} className="w-4/5 justify-center flex">
                    <Button
                      variant="contained"
                      className='p-2 shadow mt-6 bg-green-500 hover:bg-green-500 text-white w-full text-xl rounded-xl'
                      disabled={OtpLoader}
                      // onClick={handleButtonClick}
                      type='submit'
                    >
                      ENTER OTP
                    </Button>
                    {OtpLoader && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginLeft: '-12px',
                        }}
                      // <LinearProgress variant="determinate"  value={progress} sx={{
                      //   color: green[500],
                      //   position: 'absolute',
                      //   top: '50%',
                      //   left: '50%',
                      //   marginLeft: '-12px',
                      // }}
                      />
                      )}
                  </Box>
                </form>
              </div>
            </Box>
          </Fade></Modal>}


    </div>
  );
}



{/* <div className='grid grid-cols-1 '>
              <div className='bg-orange-200 rounded-t-xl p-8  text-gray-800'>
                <h1 className='uppercase text-center text-4xl'>Download report</h1>
                <h1 className='uppercase text-center text-base'>just in few steps</h1>
              </div>
              <div>
                <h1 className='capitalize text-center text-2xl my-4'>Enter Your Mobile number</h1>
                <form className='flex flex-col items-center justify-center mb-4' onSubmit={HandleFormNumberSubmit}>
                  <input placeholder='ENTER YOUR PHONE NUMBER' className='bg-gray-200 focus:outline-none rounded-xl w-10/12 p-4 ' value={UserNumber} onChange={(e)=>{setUserNumber(e.target.value)}} />
                  <button type='submit' className='bg-orange-500 p-4 mt-2 w-10/12 rounded-xl'>SEND OTP</button>
                </form>

              </div>
            </div> */}