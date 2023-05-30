import { useContext } from "react";
import UserContext from "../../context/user.context";

const Todo = ({ value, index, onDeletee }) => {
  const [{ listUser, isOpenModal }, dispatch] = useContext(UserContext);
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
      <button onClick={(e) => {}}>
        <img
          style={{ height: "20px" }}
          src="https://img.icons8.com/?size=512&id=67884&format=png"
        ></img>
      </button>

      <button
        onClick={() => {
          dispatch({ type: "SHOW_MODAL", payload: value });
        }}
      >
        <img src="https://img.icons8.com/?size=1x&id=49&format=png" alt="" />
      </button>
    </div>
  );
};
export default Todo;
