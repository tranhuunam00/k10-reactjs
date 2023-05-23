import { useState } from "react";
import styles from "./style.module.scss";

const InputCustom = ({ label, type, error, onChange = () => {}, name }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.inputCom}>
      <h5>{label}</h5>
      <input
        name={name}
        onChange={(e) => onChange(e.target)}
        type={type}
        placeholder="Nhập..."
      />
      <p>{error}</p>
    </div>
  );
};
export default InputCustom;
