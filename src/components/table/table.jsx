import styles from "./style.module.scss";
const HeaderTable = ({ listItem, handleCheck, isCheckAll }) => {
  return (
    <div className={styles.row}>
      {handleCheck && (
        <input
          style={{
            marginRight: 40,
          }}
          onChange={(e) => {
            handleCheck(e, e.target.checked ? "ALL" : "NONE");
          }}
          type="checkbox"
          checked={isCheckAll}
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

const BodyTable = ({
  editHandle,
  dataItem,
  listItem,
  handleCheck,
  onClick,
  listChecked = [],
}) => {
  return (
    <>
      {dataItem.map((item, index) => {
        return (
          <div
            onClick={() => {
              onClick(item);
            }}
            key={index}
            className={`${styles.row} ${styles.tableBody}`}
          >
            {handleCheck && (
              <input
                checked={listChecked.includes(item.id)}
                style={{
                  marginRight: 40,
                }}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  e.stopPropagation();
                  handleCheck(
                    e,
                    e.target.checked ? "ITEM_CHECK" : "ITEM_UNCHECK",
                    item
                  );
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
            <button
              onClick={(e) => {
                editHandle(e, item);
              }}
              style={{ marginRight: 30, width: 100 }}
            >
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

const Table = ({
  listItem,
  dataItem,
  handleCheck,
  onClick,
  editHandle,
  listChecked = [],
  isCheckAll,
}) => {
  return (
    <div>
      <HeaderTable
        listItem={listItem}
        handleCheck={handleCheck}
        isCheckAll={isCheckAll}
      />
      <BodyTable
        onClick={onClick}
        handleCheck={handleCheck}
        listItem={listItem}
        dataItem={dataItem}
        editHandle={editHandle}
        listChecked={listChecked}
      />
    </div>
  );
};
export default Table;
