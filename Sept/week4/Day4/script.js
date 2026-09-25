// querySeelctor
// querySelectorAll

let h1 = document.querySelector("#heading");
console.log(h1);

let sameClassElement = document.querySelectorAll(".text");
console.log(sameClassElement);

// h1.style.background = "red";
// h1.style.color="white"
// h1.style.padding="20px"

h1.style.cssText = "background:red;color:white;padding:20px;";

// console.log(h1.textContent)
h1.textContent = "This is My Content";

console.log(h1.getAttribute("id"));

h1.setAttribute("class", "head");
h1.setAttribute("title", "header section");

// h1.removeAttribute("class")

const p = document.querySelector(".text-content");
console.log(p.className);
// console.log(p.classList);

// p.className="hii";
// console.log(p.className)

p.classList.add("hii", "bye");

console.log(p.classList.contains("bye"));

p.classList.remove("class1");

p.classList.toggle("bg");

console.log(p);

// How to create a element through js

let h4 = document.createElement("h4");
console.log(h4);

h4.innerText = "this is heading 4";

let div = document.querySelector(".box");
console.log(div);

div.style.background = "blue";

// div.prepend(h4);
// div.before(h4);
div.after(h4);

let h1Name = document.querySelector("#name");
console.log(h1Name);

h1Name.addEventListener("click", () => {
  h1Name.innerText = "THis my Title";
});

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

console.log(form);
console.log(inputs[2]);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = inputs[0].value;
  let age = inputs[1].value;
  let phone = inputs[2].value;

  console.log(name, age, phone);

  localStorage.setItem("userObj",JSON.stringify({name,age,phone}))
  
  inputs[0].value=""
  inputs[1].value=""
  inputs[2].value=""
});
