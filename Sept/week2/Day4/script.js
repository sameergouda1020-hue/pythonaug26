console.log("welcome to the js class ");

// let arr=[];

// Object
let obj = {
  name: "kailash",
  age: 30,
  "phone No": 78429382313,
  marks: [20, 30, 40, { email: "hii@gmail.com" }],
};

console.log(obj["age"]);

console.log(obj.marks[3]["email"]);

obj.name = "subhankar";
console.log(obj);

// Operator
// types of Operator
// arithmatic operator
// assignment operator
// camparision operator
// logical operator
// Bitwise operator
// ternary operator

// arithmatic operator (+ , - , * , / , % , ** , ++ ,--)
console.log(2 + 3);
console.log(5 - 2);
console.log(3 * 4);
console.log(6 / 4);
console.log(5 % 2); // 5/2
console.log(2 ** 3); // 2*2*2

// Increament ( ++ ) / decrement ( -- )
//  post - pre       post - pre

let a = 4;
// console.log(a++);
// console.log(a)

// console.log(++a)

// console.log(a--) // 4
// console.log(a)

// console.log(--a);

// assignment operator (= , += , -= , *= , /= , %= , **=)

let num = 3;

// num =  num + a + 5;
// num += 5;
num += a + 5;

console.log(num);

// camparision operator (> , >= , < , <= ,== ,=== , != , !==)
console.log(4 > 5);
console.log(4 >= 4);
console.log(7 < 10);
console.log(7 <= 7);

console.log(2 == 2); // true
console.log(2 == 1); // false
console.log(2 == "2"); // true
console.log("text" == "text"); // true
console.log(true == true);
console.log(undefined == undefined);
console.log(null == null);
console.log(undefined == null);
console.log([] == []);
console.log({} == {});

console.log(2 === 2);
console.log(2 === "2");
console.log(undefined === null);
console.log([1] == [1]);

console.log(1 !== "1");


// logical operator
//  &&(and)    ||(or)    !(not)

// && (if both condition are true then the result will true otherwise false)
// \\ (if one of the condition is true then result will true otherwise false)

//        A    B    result ( A && B)
//        T    T      T
//        T    F      F
//        F    T      F
//        F    F      F



//        A    B    result ( A || B)
//        T    T      T
//        T    F      T
//        F    T      T
//        F    F      F


//        A      result ( ! A)
//        T         F
//        F         t




