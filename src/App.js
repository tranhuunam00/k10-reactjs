import { useContext, useReducer, useState } from "react";
import "./App.css";
import LoginPage from "./modules/auth/login";
import RegisterPage from "./modules/auth/register/register";
import UserProvider from "./context/user.provider";
import UserContext from "./context/user.context";
import Todo from "./components/Todo/todo";
import Modal from "./components/modal/modal";
const LIST_USER = [
  {
    id: Math.floor(Math.random() * 100000000),
    name: "hehe",
    money: 1,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    name: "hehe2",
    money: 2,
  },
];

function App() {
  const [{ listUser, isOpenModal }, dispatch] = useContext(UserContext);

  const [name, setName] = useState("");
  const [money, setMoney] = useState(0);

  const handleDelete = (value, index) => {};

  return (
    <div>
      <h1>List todo</h1>
      {listUser.map((value, index) => {
        return (
          <Todo
            key={value.id}
            value={value}
            index={index}
            onDeletee={handleDelete}
          />
        );
      })}
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
      </div>

      <button
        onClick={() => {
          console.log("----chajyyy-----");
          dispatch({
            type: "ADD_USER",
            payload: {
              id: Math.floor(Math.random() * 100000000),
              name: name,
              money: money,
            },
          });

          setName("");
          setMoney(0);
        }}
      >
        THêm người dùng
      </button>
    </div>
  );
}
const MyApp = () => {
  const [{ isOpenModal }, dispatch] = useContext(UserContext);
  return (
    <div>
      <App />
      {isOpenModal && <Modal></Modal>}
    </div>
  );
};

export default () => (
  <UserProvider>
    <MyApp />
  </UserProvider>
);
