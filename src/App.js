import React from "react";
import './App.css';
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";
import WithoutJsx from "./Component/withoutJsx";
function App()  {
  return (
    <div>
      <Greet />
      <Welcome />
      <WithoutJsx />
    </div>
  );
}

export default App;
