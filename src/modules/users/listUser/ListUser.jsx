import { useEffect, useState } from "react";
import Table from "../../../components/table/table";
import styles from "./style.module.scss";
import { callAPi } from "../../../helper/api/fetch";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);
  const getUser = async () => {
    const userApi = await callAPi({
      domain: "https://jsonplaceholder.typicode.com/users",
    });
    setListUser(userApi);
  };
  console.log(listUser);
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
      <Table listItem={listItem} dataItem={listUser} />
    </div>
  );
};
export default ListUser;
