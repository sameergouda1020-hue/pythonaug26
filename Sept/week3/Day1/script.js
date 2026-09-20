console.log(1 === 3);
console.log(1 !== "1");

// && || !
console.log(3 > 2 && 1 == "1");

let a = 4;
console.log(3 > 2 || a++ < 5);
console.log(a);

console.log(!true);
console.log(!false);

console.log(!"");
console.log(!0);

// special functionality of + operator

// addition
// concatenation
// type casting

console.log(2 + 3);
console.log(typeof (4 + "5"));
console.log(4 + "5" + 6);
console.log(typeof (4 + +"sdhashd" + 6)); //15

// Ternary operator
// cond  ? true_value :  false_value

console.log(3 < 4 ? "this is true" : "this is false");

// conditional statement
// if
// if-else
// else-if ladder
// switch
// ternary operator

// syntax
// if(cond){
//       block of code
// }

if (false) {
  console.log("this is if block");
} else {
  console.log("this is else block");
}

// nexted if
if (true) {
  if (false) {
    console.log("this is the true value");
  }
}

// else-if ladder

// if(false){

// }else if(false){

// }else if(false){

// }

let stdScore = 85;

// if (stdScore >= 90) {
//   console.log("A");
// }

// if (stdScore >= 80 && stdScore <= 90) {
//   console.log("B");
// }

// if (stdScore >= 70 && stdScore <= 80) {
//   console.log("C");
// }

// =============
if (stdScore >= 90) {
  console.log("A");
} else if (stdScore >= 80) {
  console.log("B");
} else if (stdScore >= 70) {
  console.log("C");
} else if (stdScore >= 40) {
  console.log("D");
} else {
  console.log("F");
}

// switch
let choice = "L";

switch (choice) {
  case "A": {
    console.log("This is A");
    break;
  }
  case "B": {
    console.log("This is B");
    break;
  }
  case "C": {
    console.log("This is C");
    break;
  }
  case "D": {
    console.log("This is D");
    break;
  }
  case "E": {
    console.log("This is E");
    break;
  }
  default: {
    console.log(choice);
    break;
  }
}

let stdScore="60";

switch (true) {
  case "stdScore >= 90":
    console.log("A");
    break;
  case "stdScore >= 80":
    console.log("B");
    break;
  case "stdScore >= 60":
    console.log("C");
    break;
  case "stdScore >= 40":
    console.log("D");
    break;
 
  default:
    console.log("F");
}
