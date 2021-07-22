import React, { useState } from "react";
import UseEffect from "./Component/Hooks/UseEffect";

function App()  {
  const [show, setShow] = useState(true)
  return (
    <>
      <div>{show && <UseEffect/>}</div>
      <button onClick={()=>setShow(prev =>!prev)}>{!show?'Show Post' : "Hide Post"}</button>
    </>
  );
}

export default App;
