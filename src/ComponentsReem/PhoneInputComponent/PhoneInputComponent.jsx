import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputComponent = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
    console.log("Phone Number: ", value); // Logs the full phone number with country code
  };

  return (
    <div>
      <PhoneInput
        country={"us"} // Default country
        value={phone}
        onChange={handlePhoneChange}
        inputStyle={{
          width: "100%",
          fontSize: "16px",
        }}
      />
      
    </div>
  );
};

export default PhoneInputComponent;
