import { useContext } from "react";
import UserContext from "../../../../context/user.context";

const DetailUser = () => {
  const [{ isOpenModal, dataModal: user, typeModal }, dispatch] =
    useContext(UserContext);
  return (
    <div style={{ backgroundColor: "blue", opacity: 1 }}>
      <h1>Detail</h1>
      <h3>{user.name}</h3>
      <button
        onClick={() => {
          dispatch({ type: "HIDE_MODAL" });
        }}
      >
        tat modal
      </button>
    </div>
  );
};
export default DetailUser;
