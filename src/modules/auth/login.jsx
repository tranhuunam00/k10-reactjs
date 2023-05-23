import React, { useState } from "react";
import IMAGE_APP from "../../assets/image";
import InputCustom from "../../components/input/inputCustom";

const LoginPage = () => {
  return (
    <div>
      <h1>SIGN IN</h1>
      <img src={IMAGE_APP.iconMain} alt="" />
      <InputCustom label={"Email"} type={"text"} error="error"></InputCustom>
      <InputCustom label={"Password"} type={"text"} error="error"></InputCustom>
      <button
        onClick={() => {
          console.log("hjehe");
        }}
      >
        submit
      </button>
    </div>
  );
};

export default LoginPage;
