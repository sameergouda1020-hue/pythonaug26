import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  let handleClick = () => {
    setCount((prev) => prev + 1);
  };

  let handleInput = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
    localStorage.setItem("Datauser", JSON.stringify(formData));
  };

  return (
    <div className="max-w-7xl mx-auto">
      App
      <br />
      <div className="w-40 p-3 shadow-2xl border">
        <p>Count {count}</p>

        <button className="p-1 rounded-xl bg-gray-700" onClick={handleClick}>
          Increment
        </button>
      </div>
      {/* Register form */}
      <form action="" className="mt-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="border"
          value={formData.name}
          name="name"
          onChange={handleInput}
        />
        <br />
        <input
          type="number"
          placeholder="Enter your age"
          className="border"
          name="age"
          value={formData.age}
          onChange={handleInput}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          className="border"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
        <br />
        <button className="p-1 bg-purple-500">Submit</button>
      </form>
    </div>
  );
}

export default App;
