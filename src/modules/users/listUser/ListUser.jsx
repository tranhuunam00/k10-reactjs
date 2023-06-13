import { useEffect, useState } from "react";
import Table from "../../../components/table/table";
import styles from "./style.module.scss";
import { callAPi } from "../../../helper/api/fetch";
import { useContext } from "react";
import UserContext from "../../../context/user.context";

const ListUser = () => {
  // const [listUser, setListUser] = useState([]);
  const [stateGlobal, dispathGlobal] = useContext(UserContext);
  const [listCheckUser, setListCheckUser] = useState([]);
  console.log("listCheckUser ", listCheckUser);
  const getUser = async () => {
    const userApi = await callAPi({
      domain: "https://jsonplaceholder.typicode.com/users",
    });
    dispathGlobal({
      type: "SET_LIST_USER",
      payload: {
        listUser: userApi,
      },
    });
  };

  const onDetailTable = (user) => {
    dispathGlobal({
      type: "SHOW_MODAL",
      payload: { typeModal: "DETAIL_USER", dataModal: user },
    });
  };
  const onEditTable = (e, user) => {
    e.stopPropagation();
    dispathGlobal({
      type: "SHOW_MODAL",
      payload: {
        typeModal: "EDIT_USER",
        dataModal: user,
        onClick: () => {
          console.log("onCl");
        },
      },
    });
  };
  const handleCheck = (e, type, item) => {
    e.stopPropagation();
    let listId = [];
    if (type == "ALL") {
      listId = stateGlobal.listUser.map((user) => user.id);
    }
    if (type === "NONE") listId = [];
    if (type === "ITEM_CHECK") {
      const newList = [...listCheckUser, item.id];
      listId = newList;
    }
    if (type === "ITEM_UNCHECK") {
      console.log("vao");

      const newList = [...listCheckUser].filter((id) => id !== item.id);

      console.log(newList);
      listId = newList;
    }
    console.log(type);
    console.log(listId);
    setListCheckUser(listId);
  };
  useEffect(() => {
    getUser();
  }, []);
  const listItem = [
    { name: "STT", space: 1, label: "STT" },
    { name: "id", space: 2, label: "ID" },
    { name: "name", space: 6, label: "Ten" },
    { name: "email", space: 8, label: "Email" },
    { name: "website", space: 6, label: "website" },
  ];

  return (
    <div>
      <Table
        handleCheck={handleCheck}
        onClick={onDetailTable}
        listItem={listItem}
        dataItem={stateGlobal.listUser}
        isCheck={true}
        editHandle={onEditTable}
        listChecked={listCheckUser}
        isCheckAll={stateGlobal.listUser.length === listCheckUser.length}
      />
    </div>
  );
};
export default ListUser;
