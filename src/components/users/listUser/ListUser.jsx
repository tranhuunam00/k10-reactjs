import styles from "./style.module.scss";
const HeaderTable = ({ listItem, isCheck }) => {
  return (
    <div className={styles.row}>
      {isCheck && (
        <input
          style={{
            marginRight: 40,
          }}
          type="checkbox"
        ></input>
      )}
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
      <h1
        style={{
          marginRight: 30,
          width: 100,
        }}
      >
        Edit
      </h1>
      <h1
        style={{
          marginRight: 30,
          width: 100,
        }}
      >
        Delete
      </h1>
    </div>
  );
};

const BodyTable = ({ dataItem, listItem, isCheck = false }) => {
  return (
    <>
      {dataItem.map((item, index) => {
        return (
          <div key={index} className={styles.row}>
            {isCheck && (
              <input
                style={{
                  marginRight: 40,
                }}
                type="checkbox"
              ></input>
            )}
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
            <button style={{ marginRight: 30, width: 100 }}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/edit--v1.png"
                alt="edit--v1"
              />
            </button>
            <button style={{ marginRight: 30, width: 100 }}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
                alt="filled-trash"
              />
            </button>
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
      <HeaderTable listItem={listItem} isCheck={true} />
      <BodyTable
        isCheck={true}
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
