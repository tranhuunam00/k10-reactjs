import { useState } from "react";
import "./App.css";
import LoginPage from "./modules/auth/login";
import RegisterPage from "./modules/auth/register/register";
const LIST_USER = [];
function App() {
  const [listUser, setListUser] = useState(LIST_USER);

  return (
    <div>
      <h1>List todo</h1>
      {listUser.map((value, index) => {
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
          </div>
        );
      })}
      <div>
        <input
          name="name"
          placeholder="Name"
          onChange={(e) => {
            console.log(e.target);
          }}
        ></input>
        <input name="money" placeholder="Money"></input>
      </div>

      <button
        onClick={() => {
          setListUser([...listUser, { id: 3, name: "hehe3", money: 13 }]);
        }}
      >
        THêm người dùng
      </button>
    </div>
  );
}
export default App;
