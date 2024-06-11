import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal, { modalClasses } from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import { orange } from '@mui/material/colors';

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

const EnquiryModal = (props) => {
  const { carId, showEnquiryModal, setShowEnquiryModal } = props
  const [loading, setLoading] = useState(false)
  const [userInputPage, setUserInputPage] = useState(true)
  const [optNotRevieve, setOptNotRevieve] = useState(false)
  const [userDetails, setUserDetails] = useState({ name: "", email: "", phone: "" })
  const [messages, setMessage] = useState({})

  const handleClose = () => {
    setShowEnquiryModal(false)
    setUserInputPage(true)
    setOptNotRevieve(false)
    setUserDetails({ name: "", email: "", phone: "" })
  }

  const HandleOtpVErifyFormSubmit = (e) => {
    e.preventDefault()
  }

  const HandleReSendOtp = () => {
    // send otp again
    setLoading(false)
    setOptNotRevieve(true)
  }

  const sendOtp = async () => {
    const data = { ...userDetails, "lead_id": carId }
    const url = `https://api.unificars.com/api/downloadenquiry`
    const resdata = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    })
    return resdata
  }

  const HandleFormSubmit = async (e) => {
    e.preventDefault()
    const { name, email, phone } = userDetails
    if (name != "" && email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) && phone.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)) {
      setLoading(true)
      const sendOtpRes = await sendOtp()
      const jsonResponse = await sendOtpRes.json()
      // console.log(jsonResponse)
      if (jsonResponse.code == 200) {
        setMessage({})
        setLoading(false)
        setUserInputPage(false)
      }
      else {
        setLoading(false)
        setMessage(jsonResponse)
      }
    }
    else {
      setMessage({ code: 400, status: ["Please Enter a Valid Number"] })
    }
    // console.log(userDetails)
  }

  const HandleFormChange = (e) => {
    const { name, value } = e.target
    setUserDetails({ ...userDetails, [name]: value })
  }

  return (
    <div >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showEnquiryModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={showEnquiryModal} >
          <Box sx={style} className="w-4/5 md:w-4/6">
            <div className='absolute top-4 right-4  z-50'>
              <IoIosCloseCircleOutline onClick={handleClose} className='text-2xl cursor-pointer  text-black' />
            </div>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="relative flex-auto grid grid-cols-1 md:grid-cols-2">
                <div className='hidden md:block'>
                  <img src='/enqimg.png' className='w-full h-full' />
                </div>
                {userInputPage ? <form className="m-2 mx-4 flex flex-col gap-4" onSubmit={(e) => HandleFormSubmit(e)}>
                  <h4 className='text-2xl font-bold p-2 text-blue-900'>Fill The Form <br />To Send Enqury</h4>
                  <div>
                    <div>
                      <label>NAME</label>
                    </div>
                    <input type='text' name='name' value={userDetails.name} onChange={(e) => { setMessage({}); HandleFormChange(e) }} className="placeholder:font-normal font-semibold w-full bg-gray-50 rounded-xl p-2 border-2 border-slate-400 outline-green-400 outline-1 mt-1" placeholder='Enter Your Name' />
                  </div>
                  <div>
                    <div>
                      <label>E-MAIL</label>
                    </div>
                    <input type='email' name='email' value={userDetails.email} onChange={(e) => { setMessage({}); HandleFormChange(e) }} className="placeholder:font-normal font-semibold w-full bg-gray-50 rounded-xl p-2 border-2 border-slate-400 outline-green-400 outline-1 mt-1" placeholder='Enter Your E-Mail' />
                  </div>
                  <div>
                    <div>
                      <label htmlFor='phone'>PHONE</label>
                    </div>
                    <input type='number' name='phone' value={userDetails.phone} onChange={(e) => { setMessage({}); HandleFormChange(e) }} className="placeholder:font-normal font-semibold w-full bg-gray-50 rounded-xl p-2  mt-1 border-2 border-slate-400 outline-green-400 outline-1" placeholder='Enter Your Phone' />
                    <p className='text-xs mt-2 text-gray-400'>We'll never share your details with anyone else.</p>
                    {messages && messages.code ? <div className={`${messages.code == 200 ? "text-green-500" : "text-red-500"}`}>{messages.status.map((message, index) => { return <p className="text-sm" key={index} >{message}</p> })} </div> : <></>}
                  </div>
                  <Box sx={{ m: 1, position: 'relative' }} className="justify-center flex">
                    <Button
                      variant="contained"
                      className='p-2 shadow mt-6 bg-orange-500 hover:bg-orange-500 text-xl rounded-xl w-full px-6 text-white'
                      disabled={loading}
                      type='submit'
                    >
                      SEND OTP
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: orange[500],
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginLeft: '-12px',
                        }}
                      />
                    )}
                  </Box>
                </form> :
                  <div className='flex items-center justify-center'>
                    <form className="flex flex-col gap-4" onSubmit={(e) => HandleOtpVErifyFormSubmit(e)}>
                      <h1 className='text-center text-2xl uppercase tracking-wider'>PLEASE ENTER YOUR OTP</h1>
                      <h4 className='text-center text-xs text-green-500'>The OTP has send to ******{(userDetails.phone).slice(6,)}</h4>
                      <p className='text-center text-xs'>Not Your Number? <button className='text-blue-500' onClick={() => { setUserInputPage(true); setUserDetails({ ...userDetails, phone: "" }) }}>{" "}click here</button></p>
                      <div>
                        <input type='text' maxLength={6} name='name' onChange={(e) => HandleFormChange(e)} className="font-semibold w-full bg-gray-50 rounded-xl p-2 border-2 border-slate-400 outline-green-400 outline-1 mt-1" placeholder='Enter OTP' />
                      </div>
                      {messages && messages.code ? <div className={`${messages.code == 200 ? "text-green-500" : "text-red-500"}`}>{messages.status.map((message, index) => { return <p className="text-sm" key={index} >{message}</p> })} </div> : <></>}
                      {!optNotRevieve ? <p>Did n't Recieve OTP <button className='text-blue-500' onClick={() => { HandleReSendOtp() }}> Click Here</button></p> : <p>Still Not Recieve  <button className='text-red-500' onClick={() => { setUserDetails({ ...userDetails, phone: "" }); setUserInputPage(true); setOptNotRevieve(false) }}>Please Click Here</button></p>}

                      <Box sx={{ m: 1, position: 'relative' }} className="justify-center flex">
                        <Button
                          variant="contained"
                          className='p-2 shadow mt-6 bg-orange-500 hover:bg-orange-500 text-xl rounded-xl w-full px-6 text-white'
                          disabled={loading}
                          type='submit'
                        >
                          Enter OTP
                        </Button>
                        {loading && (
                          <CircularProgress
                            size={24}
                            sx={{
                              color: orange[500],
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginLeft: '-12px',
                            }}
                          />
                        )}
                      </Box>
                    </form>
                  </div>}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>



    </div >
  )
}

export default EnquiryModal




// style={{"background-image": "url(/ourMission.png)", "objectFit":"cover", "backgroundBlendMode":"multiply", "backgroundPosition":"center", "backgroundSize":"cover" ,"backgroundColor":"#a4a4ad"}}



{/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative flex-auto grid grid-cols-1 md:grid-cols-2">
                    <div className='hidden md:block'><img src='/enqimg.png' className='w-full h-full' /></div>
                    <div className="m-2 mx-4">
                     
                      </div>
                    </div>
                  </div>
                </div> */}






