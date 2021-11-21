import React, { Component, useState } from "react";
import OtpInput from "react-otp-input";
const style: React.CSSProperties = {
  padding: 0,
  paddingBottom: "5px",
  width: "28px",
  borderTop: 0,
  borderRight: 0,
  borderLeft: 0,
  outline: 0,
};
const Otp = (props: any) => {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={otp}
      className="p-0 outline-none border-none  box-shadow-none ring-0"
      inputStyle={style}
      focusStyle={{ borderBottomColor: "#00DEDE", outline: "none" }}
      onChange={(value: string) => {
        console.log(value);
        setOtp(value);
      }}
      isInputNum
      numInputs={4}
      separator={<span>&nbsp;&nbsp;&nbsp; </span>}
    />
  );
};

export default Otp;
