const firstName = 'Adams';
const lastName = 'Muhammed';
const age = 12;
let val;
const str = 'Am jsut, fuxking bored here mehn is just too much'

// concatenation
val = firstName + ' ' + lastName;

// Append 
val = 'Joshua ';
val += 'Odunayo';

val = ' Hello, my name is ' +firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName)

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexof()
val = firstName.indexOf('m');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt('3')
// get last character
val = firstName.charAt(firstName.length -1)


// substring()
val = firstName.substring(0,4)

val = str.split(' ');
console.log(val);