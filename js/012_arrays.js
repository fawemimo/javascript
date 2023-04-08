const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,79,54); // Array constructor
const fruit = ['Apple','Pineapple','GRAPE','Banna']
let val;

// Get array length
val = numbers.length;
// check if it is array
val = Array.isArray(numbers)

// insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(36)

// MUTATING ARRAYS
// Add on to end
// numbers.push(250);
// Add on to front
// numbers.unshift(50);
// Take off from end
// numbers.pop();
// Take off from front
// numbers.shift();
// Splice value
// numbers.splice(1,3)
// Reverse
// numbers.reverse();

// concatenate array
val = numbers.concat(numbers2);

// sorting array
val = fruit.sort()

// Use the compare funtions
val = numbers.sort(function(x, y){
    return y - x;

})

// find
function under50(num){
    return num < 50
}

console.log(val);
// console.log(numbers);