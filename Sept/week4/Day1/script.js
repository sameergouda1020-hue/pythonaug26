// Array
// Non primitive data type
// index value
// In js  the array is dynamic
// we can store the mutiple type data value

// How to create the array
// direct literal(value) format

let arr = [1, 2, 3];

console.log(arr[1]);

// by using the new keyword
let newArr = new Array();
console.log(newArr);
console.log(Array.isArray(newArr));

// Array Properties(variable) and Method(func)

let numbArr = [1, 2, 3, 4, 5, 6];

console.log(numbArr.length);

// Methods
numbArr.push(7, 8);
console.log(numbArr);

numbArr.pop();
numbArr.pop();
console.log(numbArr);

numbArr.unshift(-1, 0);
console.log(numbArr);

numbArr.shift();
console.log(numbArr);

console.log(numbArr.slice(1, 5)); //1-4  o/p : start_ind  to end_idx -1

console.log(numbArr.slice(4, 3)); // reverse is not posible

console.log(numbArr.slice(4, 4));
console.log(numbArr.slice(3, 4));

// splice method

numbArr.splice(2, 3, 90, 78); // 2 3 value

console.log(numbArr);

// console.log(numbArr.reverse())
console.log(numbArr.toReversed());
console.log(numbArr);

// console.log(numbArr.sort())
console.log(numbArr.toSorted());
console.log(numbArr);

console.log(numbArr.concat([9, 7, 6]));
console.log(numbArr);

console.log(numbArr.join(""));

console.log(numbArr.at(3));
console.log(numbArr.indexOf(78));
console.log(numbArr.includes(9));
console.log(Array.isArray(numbArr));

console.log(numbArr.toString());

//!  Most important
// Special Methods of Array

// forEach
// map
// filter
// reduce
// find
// some
// every
// flat

// for-Each

console.log(numbArr);

numbArr.forEach((v, i) => {
  console.log(v, i);
});

// map
// for (let i in numbArr) {
//   numbArr[i] += 2;
// }

// console.log(numbArr)

let changedArr = numbArr.map((v, i) => v * 2);

console.log(changedArr);
console.log(numbArr);

// filter method
let filtedArr = numbArr.filter((v) => v % 2 === 0);
console.log(filtedArr);

console.log(numbArr);

// let sum = 0; // 0 0 1 91 169 175 180
// for (let v of numbArr) {
//   sum = sum + v;
// }

// console.log(sum)

let summation = numbArr.reduce((sum, v) => {
  return sum + v;
}, 0);
console.log(summation);
// numbArr.push({ name: "hii", age: 50, email: "hii@gmail.com" });
// numbArr.push({ name: "bye", age: 30, email: "bye@gmail.com" });
// console.log(numbArr);

// let selectedNumber = numbArr.find((v) => v.age >= 30);

// console.log(selectedNumber);

// numbArr.splice(1,1);
// numbArr.splice(3,1);
// console.log(numbArr)

let isAllEven = numbArr.some((v) => v % 2 === 0);
console.log(isAllEven);

let orgArr = [1, 2, 3, [4, [5, 6]]];

console.log(orgArr.flat(Infinity));

// 1
// 12
// 123
// 1234
// 12345

// ATM System

console.log("Welcome to Atm Machine");

console.log("A-> deposite" + " B->Widthdraw" + " C->check balance");

let account = 0;

function deposite(money) {
  account += money;
  alert("Successfully deposited"+ "available balance :",account)
}


function widthdraw(money) {
    alert("widthdraw money :",money +"\n Available balance :",account)
    account -= money;
}

function checkBalance() {
  alert("Available balance :",account)
}

let option=prompt("A-> deposite\n" + " B->Widthdraw\n" + " C->check balance\n"+"Enter your Choice")

let filterChoice=option.toUpperCase()

switch(filterChoice){
  case "A":{
    let amount=prompt("Enter your amount");
    deposite(amount)
  }
  break;
  case "B":{
    let amount=prompt("Enter your amount");
    widthdraw(amount)
  }
  break;
  case "C":{
    checkBalance()
  }
  break;

  default :alert("first give your choice")

}