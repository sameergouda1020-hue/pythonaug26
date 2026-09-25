// String
// It is collection of characters
// to create a string there are two ways
//  1. literal format
//  2. object format

let str = "this is a string";
console.log(str);

let objStr = new String("string by object");
console.log(objStr.valueOf());

// literal format
// 3 ways

let str1 = "This is string 1"; // double quoate
let str2 = "this is string 2"; // single
let str3 = `this is string 3`; // backtick

// in string each character are going to store in the form of index
//  str1 ->   [t | h | i | s | | i | s |  | s | t | r | i | n | g |  | 1]

console.log(str[2]);

str[2] = "o";
console.log(str[2]); // o

// in string we cant change the index value thats why it is known as immutable in nature

// property length

console.log(str1.length);

// methods
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

console.log(str1.includes("t"));
console.log(str1.replace("s", "t"));
console.log(str1.replaceAll("s", "t"));

console.log(str1.repeat(2));
console.log(str1.length);
console.log(str1.trim().length);

console.log(str1.trimStart().length);
console.log(str1.trimEnd().length);

console.log(str1.slice(-3)); // 3- 4
console.log(str1.substring(-3));

console.log(str1.split("t"));

console.log(str1.startsWith("T"));
console.log(str1.endsWith("1"));

console.log(str1.indexOf("T"));

console.log(str1.concat(str2));

// String template literal
let a = 10;
let nameStr = `Subhankar Mohanty ${a}`;
console.log(nameStr);

let confStr = "Hello"; // olleH
// let revStr="";
// for(let i =confStr.length-1;i>=0 ; i--){
//     revStr += confStr[i]
// }
// console.log(revStr)

console.log(confStr.split("").reverse().join(""));

let changedStr = nameStr.toLowerCase(); // subhankar mohanty 10
let countVowel = 0;

// for (let v of nameStr) {
//   if (
//     v == "a" ||
//     v == "e" ||
//     v == "i" ||
//     v == "o" ||
//     v == "u"
//   ) {
//     countVowel++
//   }
// }

// console.log(countVowel)

for (let v of changedStr) {
  if ("aeiou".includes(v)) {
    countVowel++;
  }
}
console.log(countVowel);

// Atm Machine

let balance = 5000;

function deposite(money) {
  balance += money;
  alert("Successfully deposited \n" + "Availble Balance " + balance);
}

function widthdraw(money) {
  balance -= money;
  alert("widthdraw money : " + money + "\n Available balance : " + balance);
}

function checkBalance() {
  alert("Available balance : " + balance);
}
let isExit = true;

while (isExit) {
  let option = prompt(
    "A->deposite\n" +
      "B->Widthdraw\n" +
      "C->check balance\n" +
      "D->Exit\n\n" +
      "Enter your Choice",
  );
  let choice = option.toUpperCase();
  switch (choice) {
    case "A":
      {
        let money = Number(prompt("Enter your deposite money"));
        if (money > 0) {
          deposite(money);
        }
      }
      break;

    case "B":
      {
        let money = Number(prompt("Enter your withdraw money"));
        if (money <= balance) {
          widthdraw(money);
        }
      }
      break;
    case "C":
      {
        checkBalance();
      }
      break;

    case "D":
      isExit = false;
      alert("Thank you");
      break;
    default:
      alert("kindly select a option");
  }
}
