import React from "react";
import './App.css';
import Counter from "./Component/Counter";
import Greet from "./Component/Greet";
import Props from './Component/Props';
import StateMsg from './Component/StateMessage';
import Welcome from "./Component/Welcome";
import WithoutJsx from "./Component/withoutJsx";
function App()  {
  return (
    <div>
      <Greet />
      <Welcome />
      <WithoutJsx />
      <Props name = "Mohammad ali sakib">
        <p>What is your name . </p>
      </Props>
      <Props name = "Rahim" />
      <Props name = "Memi"> 
      <button >Get link</button>
      </Props>
      <StateMsg />
      <Counter />
    </div>
  );
}

export default App;
