import { useEffect, useState } from "react";
import Table from "../../../components/table/table";
import styles from "./style.module.scss";
import { callAPi } from "../../../helper/api/fetch";
import { useContext } from "react";
import UserContext from "../../../context/user.context";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);
  const [stateGlobal, dispathGlobal] = useContext(UserContext);

  const getUser = async () => {
    const userApi = await callAPi({
      domain: "https://jsonplaceholder.typicode.com/users",
    });
    setListUser(userApi);
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
        onClick={onDetailTable}
        listItem={listItem}
        dataItem={listUser}
        isCheck={true}
        editHandle={onEditTable}
      />
    </div>
  );
};
export default ListUser;
