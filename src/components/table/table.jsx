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
          key={item.label}
        >
          {item.label}
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
                  key={key.name}
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

const Table = ({ listItem, dataItem, isCheck }) => {
  return (
    <div>
      <HeaderTable listItem={listItem} isCheck={isCheck} />
      <BodyTable isCheck={isCheck} listItem={listItem} dataItem={dataItem} />
    </div>
  );
};
export default Table;
