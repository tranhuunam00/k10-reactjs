import styles from "./style.module.scss";
const HeaderTable = ({ listItem }) => {
  return (
    <div className={styles.row}>
      <input
        style={{
          marginRight: 40,
        }}
        type="checkbox"
      ></input>
      {listItem.map((item) => (
        <h1
          style={{
            flex: item.space,
            borderRightWidth: 1,
            borderRightStyle: "solid",
          }}
          key={item}
        >
          {item.name}
        </h1>
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
            <input
              style={{
                marginRight: 40,
              }}
              type="checkbox"
            ></input>
            {listItem.map((key, index) => {
              return (
                <h3
                  style={{
                    flex: key.space,
                  }}
                >
                  {item[key.name]}
                </h3>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

const Table = () => {
  const listItem = [
    { name: "STT", space: 1 },
    { name: "id", space: 2 },
    { name: "name", space: 6 },
    { name: "address", space: 6 },
    { name: "sdt", space: 4 },
    { name: "sex", space: 1 },
  ];
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
            sdt: 90987,
            sex: "male",
          },
          {
            STT: 2,
            id: "id12",
            name: "hai",
            address: "hcm",
            sex: "male",
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
