// function
// Types of function
// Anonymous Function
// named function
// expressional function
// arrow function
// Higher order function
// IIf function

// function func(){
//     console.log("this is my first func")
// }

// func()

// Anonymous Function
// function (){

// }

// named function
function add() {
  console.log("addition ", 1 + 2);
}

add();

// expressional function
let sub = function () {
  console.log("subsctraction value :", 4 - 2);
};

sub();

// arrow function
let arrowFun = () => {
  console.log("this is arrow fun");
};
arrowFun();

function marriageCard(fullName) {
  console.log(fullName);
}

marriageCard("kalia Behera");
marriageCard("Krishna");
marriageCard("Balaram");

let addition = (num1, num2) => {
  console.log("Sum :", num1 + num2);
};

addition(3, 4);

// return type
function returnFun() {
  console.log("this is return function");
  return "3" - 2;
}

let value = returnFun();
console.log(value);

// Higher order function

// function hof(func) {
//   func()
// }

// hof(()=>{console.log("Hii welcome")});

function hof() {
  return () => {
    console.log("welcome");
  };
}

let func = hof();
func();

// IIF immidiate invoking function

// (
//   function () {
//     console.log("this is IIF");
//   },
// )();

function parent() {
  console.log("this is parent");
  let a = 90;

  function child() {
    console.log("this is child");
    console.log(a)

    // function child1(){
    //     console.log("this is child 1")
    // }
    // return child1;
  }
  return child;
}

parent()();


