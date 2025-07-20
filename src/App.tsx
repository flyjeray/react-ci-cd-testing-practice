import React from "react";
import { Text } from "./components/Text";
import CheckboxWithLabel from "./components/CheckboxWithLabel";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1>CI/CD Practice</h1>
      <Text value={"Some text"} />
      <CheckboxWithLabel labelOn={"On"} labelOff={"Off"} />
    </div>
  );
}

export default App;
