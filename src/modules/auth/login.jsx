import React, { useState } from "react";
import IMAGE_APP from "../../assets/image";
import InputText from "../../components/input/inputText";

const LoginPage = () => {
  return (
    <div>
      <h1>SIGN IN</h1>
      <img src={IMAGE_APP.iconMain} alt="" />
      <InputText label={"Email"} type={"text"} error="error"></InputText>
    </div>
  );
};

export default LoginPage;
