//Q1

let std1 = 50 ;
let std2 = 60 ;
let std3 = 70 ;
let std4 = 65 ;
let std5 = 80 ;

let total = std1 + std2 + std3 + std4 + std5;
console.log("Total Marks =", total);

//Q2
let price = 1200;
let discount = 15;

let discountAmount = price * discount / 100;
let finalPrice = price - discountAmount;

console.log("Discount =", discountAmount);
console.log("Final Price =", finalPrice);

//Q3

let a = 5;
let square = a * a;
let cube = a * a * a;

console.log("Square =", square);
console.log("Cube =", cube);

//Q4
let b = -5;

if (b > 0) {
    console.log("Positive");
} else if (b < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Q5
let stdScore = 75 ;
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

//Q6
let c = 4;
if (c / 2 === 0 ) {
    console.log("even");

} else {
    console.log("odd");
}


//Q7
let x = 10;
let y = 20;
let z = 15;

if (x > y && x > z) {
    console.log("Largest =", x);
} else if (y > x && y > z) {
    console.log("Largest =", y);
} else {
    console.log("Largest =", z);
}

//Q 12
function add() {
  console.log("addition ", 1 + 2);
}

add();