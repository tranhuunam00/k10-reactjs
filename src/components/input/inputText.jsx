import styles from "./style.module.scss";

console.log(styles);

const InputText = ({ label, type, error }) => {
  return (
    <div className={styles.inputCom}>
      <h5>{label}</h5>
      <input type={type} placeholder="Nhập..." />
      <p>{error}</p>
    </div>
  );
};
export default InputText;
