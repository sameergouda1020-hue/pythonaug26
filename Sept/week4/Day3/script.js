// DOM -> Document Object Model
// Object -> It is a real time entity which has some state and behaviour

// document -> it is a object which is containing all the html tags in form of object

// camel
// fullName

// pascal
// FullName

// snake
// full_name

// console.log(document.body);

// getElementById()
// getElementsByClassName()
// getElementsByTagname()

// let sameClassElement = document.getElementsByClassName("content");;
// console.log(sameClassElement[1]);

// let sameTagElement=document.getElementsByTagName("h4");
// console.log(sameTagElement[1])

// let h1 = document.getElementById("heading");
// console.log(h1.innerText);
// console.log(h1.innerHTML);

// h1.innerText="this is myself";
// console.log(h1.innerText)

// h1.innerHTML="<b>this is bold tag</b>";
// console.log(h1.innerHTML)

// querySelector()
// querySelectorAll()

let h1 = document.querySelector("#heading");
console.log(h1)

let sameCLassEl=document.querySelectorAll(".content");
console.log(sameCLassEl[1])
