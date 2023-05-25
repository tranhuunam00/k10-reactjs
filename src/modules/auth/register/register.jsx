import { useState } from "react";
import IMAGE_APP from "../../../assets/image";
import InputCustom from "../../../components/input/inputCustom";
import styles from "./style.module.scss";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const handleInput = (e) => {
    const { name, value, checked } = e;
    if (name === "email") setEmail(value);
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
          />
        </div>
      </div>
      <div className={styles.register_intro}></div>
    </div>
  );
};

export default RegisterPage;
