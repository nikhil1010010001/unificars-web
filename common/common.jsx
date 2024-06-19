import axios from "axios";

export const pdiCarHealthenquiry = async (name, phone, email, address) => {
  try {
    const res = await axios.post(
      "https://crm.unificars.com/api/carhealthenquiry",
      {
        name: name,
        phone: phone,
        email: email,
        address: address,
      }
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const verifyOtpForPdiCarHealthEnquiry = async (phone, otp) => {
  try {
    const res = await axios.post(
      "https://crm.unificars.com/api/verifybooktestdrive",
      {
        phone: phone,
        otp: otp,
      }
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
