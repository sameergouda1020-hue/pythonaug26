import React from "react";
import Home from "./Home";
import About from "./About";
import Card from "./Card";

function App() {
  let a;

  let animals = [
    {
      img: "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
      title: "Dog",
      desc: "this is white colour dog",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9J4XJGQnhMQ7dpFsytfdYbt-WXRJnGyKbPze4xxxWT6A3HHzEwde9KA&s=100",
      title: "Fox",
      desc: "this is wild fox",
    },
    {
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241010/pngtree-the-bengal-tiger-emblem-of-wild-image_16362570.jpg",
      title: "Tiger",
      desc: "this is bengol tiger",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAziQHlls31qzLtaQASnL0WtqTkSA3AbfoMW5-X_ZnTwrP8cQLOdmCK6W&s=10",
      // title: "Goat",
      desc: "This is a nice goat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAziQHlls31qzLtaQASnL0WtqTkSA3AbfoMW5-X_ZnTwrP8cQLOdmCK6W&s=10",
      // title: "Goat",
      desc: "This is a nice goat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAziQHlls31qzLtaQASnL0WtqTkSA3AbfoMW5-X_ZnTwrP8cQLOdmCK6W&s=10",
      // title: "Goat",
      desc: "This is a nice goat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAziQHlls31qzLtaQASnL0WtqTkSA3AbfoMW5-X_ZnTwrP8cQLOdmCK6W&s=10",
      // title: "Goat",
      desc: "This is a nice goat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAziQHlls31qzLtaQASnL0WtqTkSA3AbfoMW5-X_ZnTwrP8cQLOdmCK6W&s=10",
      // title: "Goat",
      desc: "This is a nice goat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAziQHlls31qzLtaQASnL0WtqTkSA3AbfoMW5-X_ZnTwrP8cQLOdmCK6W&s=10",
      // title: "Goat",
      desc: "This is a nice goat",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAziQHlls31qzLtaQASnL0WtqTkSA3AbfoMW5-X_ZnTwrP8cQLOdmCK6W&s=10",
      // title: "Goat",
      desc: "This is a nice goat",
    },
  ];

  return (
    <div className="max-w-6xl m-auto">
      Hello World
      <br />
      <Home num={a} obj={{ name: "soumya", age: 30 }} />
      <About children={"hello Bhai"}>
        This is Parent about code
        <p>this is my Parent page</p>
      </About>
      <div className="grid grid-cols-4 gap-4">
        {animals?.map((animal) => (
          <Card animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default App;
