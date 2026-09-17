// declare a varible using let inside the block
{
    let a=20;
}
// console.log(a);

function fun(){
    let a=30;
    console.log(a)
}

fun()

// const declare 

{
    const a=40;
    console.log(a)
}

function fun1(){
    const b=50;
    console.log(b)
}

fun1()


// the way of declaration
// only declration
// only initialization
// both declare and init

// only redeclaration
// only reinitialization
// both redeclaration and reini

// var 
var num;
console.log(num)

num=20;
console.log(num)

var num1=60;
console.log(num1)

var num;
console.log(num)

num=60;
console.log(num)

var num1=99;
console.log(num1)

// let 
let number;
console.log(number)

number=100;
console.log(number)

let sum=55;
console.log(sum)

// let number;

number=95;
console.log(number)

// let sum=44;

// const

// const age;
// age=30;
// console.log(age)

const age=30;
console.log(age);

// age=90;
// console.log(age)



// data type
// primitive (number,string,boolean,symbol,BigInt,null,undefined)
// non primitive (arrray,object,function)

// primitive
let score=50.99;
console.log(typeof score)

let fullName="xyz Das";
console.log(typeof fullName)

let isPassed=true;
console.log(typeof isPassed)

let alpha=Symbol("@");
console.log(typeof alpha)

let bigNumber=BigInt("387247632874682734673264876327463274");
console.log(typeof bigNumber)

let nullVariable=null;
console.log(typeof nullVariable)

let varible=undefined;
console.log(typeof varible)


// non primitve
let arr=[1,2,"hii",null,[4,[6,7]]];

// 0   1    2      3     4
// [1][2]["hii"][null] [[4,5]]
console.log(arr[4][1][1])
console.log(typeof arr)