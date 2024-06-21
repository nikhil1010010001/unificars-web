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

export const getCarValuation = async (carInfo, setExpectedPrice) => {
  const data = {
    year: carInfo.year,
    model_name: carInfo.variant.name,
    id: carInfo.model.id,
  };

  console.log("Evaluation data", data);

  try {
    const valuation = await fetch(
      "https://api.unificars.com/api/getvarientmodelamount",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const value = await valuation.json();
    if (value.code == 200) {
      const response = value.data;

      let calculatedyear = 15;
      if (carInfo.fuelType === "Diesel") {
        calculatedyear = 10;
      }
      let calculation = response / calculatedyear;
      let remainingyears =
        Number(carInfo.year) +
        Number(calculatedyear) -
        new Date().getFullYear();

      let expectedprice = Math.round(calculation * remainingyears);
      let expectedprice1 = Math.round(calculation * remainingyears) + 100240;
      console.log([expectedprice, expectedprice1]);
      setExpectedPrice([Math.abs(expectedprice), Math.abs(expectedprice1)]);
    }
  } catch (error) {
    console.log("getCarValuation error", error);
  }
};
