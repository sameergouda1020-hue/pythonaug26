// Loop
// if we want to execute a statement or a block of statement repeatedly then we have to use loop statement

// Different type of the loop
// for
// while
// do-while
// for-in loop
// for-of loop

// for(intialization ; cond ; updation){
// statement
// }
for (let i = 1; i <= 5; i++) {
  console.log("Hii");
}

//  i :   1 2 3 4 5 6
//  i<=5  t t t t t f
// out :  Hii Hii Hii Hii Hii

// console.log(i)

// while
let v = 1;
while (v <= 5) {
  // cond : true
  console.log("Hello");
  v++;
}
console.log(v);

// v : 1
// v<=5 : t t
//  out : hello

// do-while
let a = 1;
do {
  console.log("Bye");
  a++;
} while (a <= 5);

let arr = [1, 2, "sdfksj", null, undefined,"hhii","Byy"];

// for(let i=0;i<=arr.length-1;i++){
//   console.log(arr[i])
// }

// for-in
for(let i in arr){
  console.log(arr[i])
}
console.log("========================")
// for-of
for(let v of arr){
  console.log(v)
}


// obj
let obj={
  age:30,
  name:"sonali",
  email:"sonali@gmail.com"
}
console.log(obj)

for(let key in obj){
  console.log(obj[key])
}


for(let KV of obj){
  console.log(KV)
}
