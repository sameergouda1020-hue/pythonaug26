import React, { createContext, useState } from "react";
import Home from "./Home";
import LearnUseEffect from "./LearnUseEffect";

const nameContext = createContext("");
const funcContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  // props drilling

  // to overcome the props drilling problem we used the context object concept
  // What is context object (global object )

  // global object always create inside the provider
  // who is try to consume that is called consumer

  // The steps to create the context object

  // first create the context object by ussing the createContext method
  // add the provider
  // add the value inside the provider
  // export the provider
  // call the child compoent inside the provider

  // How to access the vallue form the context object
  // using the useContext hook i can access the value from the corresponding context object

  return (
    <div>
      Count :{count}
      <br />
      <nameContext.Provider value={"Subhankar Dash"}>
        <funcContext.Provider value={setCount}>
          <Home />
        </funcContext.Provider>
      </nameContext.Provider>

      <LearnUseEffect/>

    </div>
  );
}

export { nameContext, funcContext };

export default App;
