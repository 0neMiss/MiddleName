import React, { useState } from "react";
import NameList from "./NameList";

function App({ data }) {
  const [names, setNames] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [middleName, setMiddleName] = useState("");
  const handleChange = (e) => {
    setMiddleName(e.target.value);
  };
  const handleSubmit = () => {
    const newName = { ...names[selectedIndex], middleName: middleName };
    const newNames = [...names];
    newNames[selectedIndex] = newName;
    setNames(newNames);
    setMiddleName("");
  };
  return (
    <div className="App">
      <NameList {...{ names, setSelectedIndex, selectedIndex }} />

      <input
        style={{ marginLeft: "22px" }}
        value={middleName}
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <button
        style={{ marginLeft: "20px" }}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        add a middle name
      </button>
    </div>
  );
}

export default App;
