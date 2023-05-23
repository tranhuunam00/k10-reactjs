import { useState } from "react";
import styles from "./style.module.scss";

const InputCustom = ({ label, type, error }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.inputCom}>
      <h5>{label}</h5>
      <input
        onChange={(e) => {
          console.log(e.target);
        }}
        type={type}
        placeholder="Nhập..."
      />
      <p>{error}</p>
    </div>
  );
};
export default InputCustom;
