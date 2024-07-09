import React, { useState } from "react";

const PhoneNumberVerification = ({ onVerify }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Added state to track if OTP is sent

  const sendOtp = async () => {
    const data = {
      mobile: phoneNumber,
      // lead_id: carId, // Uncomment and replace with actual lead_id if needed
    };
    const url = `https://crm.unificars.com/api/webotp`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    return response;
  };

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    if (
      phoneNumber.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)
    ) {
      // Assuming the format for Indian phone numbers
      // You can adjust the regex based on your requirements
      const response = await sendOtp();

      console.log("OTP sent:", response);

      const jsonResponse = await response.json();
      if (jsonResponse.code === 200) {
        setOtpSent(true);
      } else {
        console.error("Error sending OTP:", jsonResponse);
        // Handle error scenarios if needed
      }
    } else {
      console.error("Invalid phone number format");
      // Handle invalid phone number format
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    // Add logic to verify OTP
    console.log("Verify OTP", otp);
    setIsVerified(true);
    onVerify(phoneNumber); // Notify parent component about verification
  };

  return (
    <div className="flex flex-col items-center justify-center h-full my-8 min-h-[50vh]">
      {!isVerified ? (
        otpSent ? (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white p-2 px-4 rounded-lg ml-2">
              Verify OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Verify Your Phone Number</h2>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="p-2 border border-gray-300 rounded"
              maxLength={10}
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white p-2 px-4 rounded-lg ml-2">
              Send OTP
            </button>
          </form>
        )
      ) : (
        <div className="text-2xl font-bold">Phone Number Verified!</div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;
