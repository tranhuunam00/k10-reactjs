import React, { useState } from "react";
import IMAGE_APP from "../../assets/image";
import InputCustom from "../../components/input/inputCustom";

const LoginPage = () => {
  const [username, setUsername] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e;
    if (name === "username") setUsername(value);
  };

  return (
    <div>
      <h1>SIGN IN</h1>
      <img src={IMAGE_APP.iconMain} alt="" />
      <h1>{username}</h1>
      <InputCustom
        onChange={handleChangeInput}
        label={"Email"}
        type={"text"}
        name={"username"}
        error="error"
      ></InputCustom>
      <InputCustom label={"Password"} type={"text"} error="error"></InputCustom>
      <button
        onClick={() => {
          console.log(username);
        }}
      >
        submit
      </button>
    </div>
  );
};

export default LoginPage;
