// String
const name1 = 'Wale'
const name2 = new String('Wale'); // returns an object

name2.foo = 'Fawemimo'
// console.log(name2)

// NUmber 
const num1 = 5
const num2 = new Number(5)

// Bool
const bool1 = true;
const bool2 = new Boolean(true);

// Function 
const getSum1 = function(x,y){
    return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 1')

// Object 
const john1 = {name:'John'}
const john2 = new Object({name:'John'});
// console.log(john2)

// Arrays 
const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

// Regular Expressions
const re1 = /w+/;
const re2 = new RegExp('//w+')

console.log(re2);
