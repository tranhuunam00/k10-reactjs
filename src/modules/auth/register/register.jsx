import { useState } from "react";
import IMAGE_APP from "../../../assets/image";
import InputCustom from "../../../components/input/inputCustom";
import styles from "./style.module.scss";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    const { name, value, checked } = e;
    if (name === "email") setEmail(value);
    if (name === "username") setUsername(value);
  };

  return (
    <div className={styles.register}>
      <div className={styles.register_info}>
        <img src={IMAGE_APP.iconMain} alt="" />
        <div className={styles.info_input}>
          <InputCustom
            name={"email"}
            label={"Email"}
            placeholder={"Nhập email... "}
            onChange={handleInput}
            icon={IMAGE_APP.emailIcon}
            validate={"required|minLength:6"}
          />
          <InputCustom
            name={"username"}
            label={"UserName"}
            placeholder={"Nhập username... "}
            onChange={handleInput}
            icon={IMAGE_APP.userIcon}
          />
        </div>
      </div>
      <div className={styles.register_intro}></div>
    </div>
  );
};

export default RegisterPage;
