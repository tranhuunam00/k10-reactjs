import { useContext, useState } from "react";
import UserContext from "../../context/user.context";
import DetailUser from "../../modules/users/modal/detailUser/DetailUser";
import EditUser from "../../modules/users/modal/edit/EditUser";

const Modal = () => {
  const [{ isOpenModal, dataModal: user, typeModal }, dispatch] =
    useContext(UserContext);

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
      {typeModal === "DETAIL_USER" && <DetailUser />}
      {typeModal === "EDIT_USER" && <EditUser />}
    </div>
  );
};
export default Modal;
