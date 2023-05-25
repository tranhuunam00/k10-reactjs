import { useState } from "react";
import IMAGE_APP from "../../../assets/image";
import InputCustom from "../../../components/input/inputCustom";
import styles from "./style.module.scss";
import {
  parseValid,
  validateInputHelper,
} from "../../../helper/validate/validateInput";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState({ email: null, username: null });
  console.log(error);

  const handleInput = (e) => {
    const { name, value, checked } = e;
    const validate = parseValid(e.getAttribute("validate"));
    const errorInput = validateInputHelper(name, value, validate);
    if (name === "email") {
      setError({ ...error, email: errorInput });
      setEmail(value);
    }
    if (name === "username") {
      setUsername(value);
      setError({ ...error, username: errorInput });
    }
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
            error={error.email}
          />
          <InputCustom
            name={"username"}
            label={"UserName"}
            placeholder={"Nhập username... "}
            onChange={handleInput}
            icon={IMAGE_APP.userIcon}
            validate={"required|minLength:6"}
          />
          <button onClick={() => {}}></button>
        </div>
      </div>
      <div className={styles.register_intro}></div>
    </div>
  );
};

export default RegisterPage;
