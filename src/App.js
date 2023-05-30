import { useState } from "react";
import "./App.css";
import LoginPage from "./modules/auth/login";
import RegisterPage from "./modules/auth/register/register";
const LIST_USER = [];

const Todo = ({ value, index }) => {
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
      <button onClick={() => {}}>
        <img
          style={{ height: "20px" }}
          src="https://img.icons8.com/?size=512&id=67884&format=png"
        ></img>
      </button>
    </div>
  );
};
function App() {
  const [listUser, setListUser] = useState(LIST_USER);
  const [name, setName] = useState("");
  const [money, setMoney] = useState(0);

  return (
    <div>
      <h1>List todo</h1>
      {listUser.map((value, index) => {
        return <Todo value={value} index={index} />;
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
          if (!name || !money) return alert("nhap di");
          setListUser([
            ...listUser,
            {
              id: Math.floor(Math.random() * 100000000),
              name: name,
              money: money,
            },
          ]);
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
