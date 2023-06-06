import styles from "./style.module.scss";
const HeaderTable = ({ listItem }) => {
  return (
    <div className={styles.row}>
      {listItem.map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  );
};

const BodyTable = ({ dataItem, listItem }) => {
  return (
    <>
      {dataItem.map((item, index) => {
        return (
          <div key={index} className={styles.row}>
            {listItem.map((key, index) => {
              return <h3>{item[key]}</h3>;
            })}
          </div>
        );
      })}
    </>
  );
};

const Table = () => {
  const listItem = ["STT", "id", "name", "address", "sdt"];
  return (
    <div>
      <HeaderTable listItem={listItem} />
      <BodyTable
        listItem={listItem}
        dataItem={[
          {
            STT: 1,
            id: "id11",
            name: "quang",
            address: "hanoi",
          },
          {
            STT: 2,
            id: "id12",
            name: "hai",
            address: "hcm",
          },
        ]}
      />
    </div>
  );
};
const ListUser = () => {
  return (
    <div>
      <Table />
    </div>
  );
};
export default ListUser;
