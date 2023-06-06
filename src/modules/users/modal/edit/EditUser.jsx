import { useContext } from "react";
import UserContext from "../../../../context/user.context";
import InputCustom from "../../../../components/input/inputCustom";

const EditUser = () => {
  const [{ isOpenModal, dataModal: user, onClick }, dispatch] =
    useContext(UserContext);
  return (
    <div>
      <InputCustom label={"email"} value={user.email} />
      <button
        onClick={() => {
          onClick();
        }}
      >
        luu
      </button>
      <h1>edit</h1>
    </div>
  );
};
export default EditUser;
