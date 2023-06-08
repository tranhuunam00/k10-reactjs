import { useContext, useRef, useState } from "react";
import "./App.css";
import ListUser from "./modules/users/listUser/ListUser";
import UserProvider from "./context/user.provider";
import UserContext from "./context/user.context";
import DetailUser from "./modules/users/modal/detailUser/DetailUser";
import Modal from "./components/modal/modal";

function App() {
  const [stateGlobal, dispathGlobal] = useContext(UserContext);
  return (
    <div
    // onClick={(e) => {
    //   if (e.target.id !== "modal") dispathGlobal({ type: "HIDE_MODAL" });
    // }}
    >
      <h1>Users</h1>
      <ListUser />
      {stateGlobal.isOpenModal && <Modal />}
    </div>
  );
}

const MyApp = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default MyApp;
