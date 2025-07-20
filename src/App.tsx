import React from "react";
import { Text } from "./components/Text";
import CheckboxWithLabel from "./components/CheckboxWithLabel";

function App() {
  return (
    <div className="App">
      <h1>It works</h1>
      <Text value={"Some text"} />
      <CheckboxWithLabel labelOn={"On"} labelOff={"Off"} />
    </div>
  );
}

export default App;
