import { useContext, useState } from "react";
import UserContext from "../../context/user.context";

const Modal = () => {
  const [{ isOpenModal, dataModal: user }, dispatch] = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [money, setMoney] = useState(user.money);
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        backgroundColor: "red",
        position: "fixed",
        top: 0,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            const { name, value } = e.target;
            setName(value);
          }}
        ></input>
        <input
          name="money"
          placeholder="Money"
          value={money}
          onChange={(e) => {
            const { name, value } = e.target;
            setMoney(value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch({
              type: "CHANGE_USER",
              payload: {
                id: user.id,
                name,
                money,
              },
            });
          }}
        >
          luu
        </button>
        <button
          onClick={() => {
            dispatch({ type: "HIDE_MODAL" });
          }}
        >
          tat modal
        </button>
      </div>
    </div>
  );
};
export default Modal;
