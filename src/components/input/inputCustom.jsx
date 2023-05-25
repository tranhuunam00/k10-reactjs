import { useState } from "react";
import styles from "./style.module.scss";

const InputCustom = ({
  label,
  type = "text",
  error = null,
  onChange = () => {},
  name,
  placeholder,
  validate,
  icon,
}) => {
  return (
    <div className={styles.inputCom}>
      <label>{label}</label>
      <div className={styles.inputCom_box}>
        <img src={icon} alt="" />
        <input
          name={name}
          onChange={(e) => onChange(e.target)}
          type={type}
          placeholder={placeholder}
          validate={validate}
        />
        <p>{error}</p>
      </div>
    </div>
  );
};
export default InputCustom;
