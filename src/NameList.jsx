import React from "react";

function NameList({ names, setSelectedIndex, selectedIndex }) {
  const items = names.map((item, index) => {
    return (
      <li
        style={
          selectedIndex === index
            ? { color: "red", cursor: "pointer" }
            : { cursor: "pointer" }
        }
        onClick={(e) => {
          e.preventDefault();
          if (index === selectedIndex) {
            setSelectedIndex(null);
          } else {
            setSelectedIndex(index);
          }
        }}
        key={`${index}${item.middleName}`}
      >
        {`${item.firstName} ${item.middleName} ${item.lastName}`}
      </li>
    );
  });
  console.log(names);

  return <ul>{items}</ul>;
}

export default NameList;
