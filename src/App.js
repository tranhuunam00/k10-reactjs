import { useContext, useRef, useState } from "react";
import "./App.css";
import ListUser from "./modules/users/listUser/ListUser";
import UserProvider from "./context/user.provider";
import UserContext from "./context/user.context";
import DetailUser from "./modules/users/modal/detailUser/DetailUser";
import Modal from "./components/modal/modal";

function App() {
  const [stateGlobal, dispathGlobal] = useContext(UserContext);
  console.log(stateGlobal);
  return (
    <>
      <h1>Users</h1>
      <ListUser />
      {stateGlobal.isOpenModal && <Modal />}
    </>
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
