import React, { useEffect, useState } from "react";

function LearnUseEffect() {
  const [total, setTotal] = useState(0);
  const [a, setA] = useState(0);

  //   useEffect()
  //  what is the use of the useEffect
  // to provide the side effect with another functionality

  // useEffect(() => {

  // //  effect code

  //   return () => {
  //     // clear code
  //   }
  // }, [dependencies])

  // Case -1
  //   IN each render
  //   useEffect(() => {
  //     console.log("Hello")
  //   });

  // case 2
  //   it will only execute on first render
  //   useEffect(() => {
  //     console.log("Hello")
  //   }, []);

  // case 3
  // use return stat
  // useEffect(()=>{
  //     console.log("value update")

  //     return()=>{
  //         console.log("value removed")
  //     }
  // })

  // case 4
  // based on dep
  useEffect(() => {
    console.log("Hello");
  }, [a, total]);

  return (
    <div>
      Total value : {total}
      <br />
      <button onClick={() => setTotal((prev) => prev + 2)}>Inc Total</button>
      <br />A value : {a}
      <br />
      <button onClick={() => setA((prev) => prev + 3)}>Inc A</button>
    </div>
  );
}

export default LearnUseEffect;
