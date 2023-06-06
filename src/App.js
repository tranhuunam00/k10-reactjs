import { useRef, useState } from "react";
import "./App.css";
import ListUser from "./components/users/listUser/ListUser";

function App() {
  return (
    <>
      <h1>Users</h1>
      <ListUser />
    </>
  );
}
export default App;
