import React, { useContext } from "react";
import { nameContext } from "./App";

function Home1() {
  let name = useContext(nameContext);
  return <div>Home 1
    <br />
    Home 1 page Name : {name}
    
  </div>;
}

export default Home1;
