import React, { useContext } from "react";
import Home1 from "./Home1";
import { funcContext, nameContext } from "./App";

function Home() {
  let name = useContext(nameContext);
  let setCount = useContext(funcContext);
  return (
    <div>
      Home
      <br />
      Home Page Name : {name}
      {/* <Home1 /> */}
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Dic</button>
    </div>
  );
}

export default Home;
