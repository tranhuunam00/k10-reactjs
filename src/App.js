import { useReducer, useState } from "react";
import "./App.css";
import LoginPage from "./modules/auth/login";
import RegisterPage from "./modules/auth/register/register";
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

const Todo = ({ value, index, onDeletee }) => {
  return (
    <div
      key={value.id}
      style={{
        width: "200px",
        display: "flex",
        margin: "20px",
        justifyContent: "space-between",
      }}
    >
      <h3>{index + 1}</h3>
      <h3>{value.name}</h3>
      <h3>{value.money}</h3>
      <button
        onClick={(e) => {
          onDeletee(value, index);
        }}
      >
        <img
          style={{ height: "20px" }}
          src="https://img.icons8.com/?size=512&id=67884&format=png"
        ></img>
      </button>
    </div>
  );
};
function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "REMOVE":
        return state.filter((item) => item.id !== action.payload.id);
      default:
        return state;
    }
  };
  const [listUser, setListUser] = useState(LIST_USER);
  const [listUser2, dispatch] = useReducer(reducer, []);

  const [name, setName] = useState("");
  const [money, setMoney] = useState(0);

  const handleDelete = (value, index) => {
    const removeList = listUser.filter(
      (valuee, indexx) => valuee.id !== value.id
    );
    dispatch({
      type: "REMOVE",
      payload: value,
    });
  };

  return (
    <div>
      <h1>List todo</h1>
      {listUser2.map((value, index) => {
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
        onClick={async () => {
          // if (!name || !money) return alert("nhap di");
          const newList = [
            ...listUser,
            {
              id: Math.floor(Math.random() * 100000000),
              name: name,
              money: money,
            },
          ];
          dispatch({
            type: "ADD",
            payload: {
              id: Math.floor(Math.random() * 100000000),
              name: name,
              money: money,
            },
          });
          // setListUser(newList);
          // const jsonList = JSON.stringify(newList);

          // await localStorage.setItem("list", jsonList);
          setName("");
          setMoney(0);
        }}
      >
        THêm người dùng
      </button>
    </div>
  );
}
export default App;
