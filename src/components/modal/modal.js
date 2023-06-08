import { useContext, useState } from "react";
import UserContext from "../../context/user.context";
import DetailUser from "../../modules/users/modal/detailUser/DetailUser";
import EditUser from "../../modules/users/modal/edit/EditUser";
import styles from "./styles.module.scss";
const Modal = () => {
  const [{ isOpenModal, dataModal: user, typeModal }, dispatch] =
    useContext(UserContext);

  return (
    <div
      id="modal"
      className={styles.modal}
      onClick={(e) => {
        if (e.target.id === "modal") dispatch({ type: "HIDE_MODAL" });
      }}
    >
      <div
        id="modal_content"
        style={{
          zIndex: 2,
        }}
      >
        {typeModal === "DETAIL_USER" && <DetailUser />}
        {typeModal === "EDIT_USER" && <EditUser />}
      </div>
    </div>
  );
};
export default Modal;
