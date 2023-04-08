// FOR LOOP
// for(let i = 0; i < 10; i++) {
//     console.log('Number ' + i)
// }

// for(let i = 0; i < 10; i++) {
//     if( i === 2 ) {
//         console.log(`This number ${i} is my favourite`)
//         continue; // continue: to skip ang go to the next iteration
//     }
//     if( i === 3 ){
//         console.log('Break the loop')
//         break; // break: means to stop the loop
//     }

//     console.log(`Number ${i}`)
// }

// WHILE LOOP
let i = 100;

//  while (i < 10){
//     console.log(`Number ${i}`)
//     i++;
// }

// DO WHILE
// do {
//     console.log(`Number ${i}`)
//     i++;
// }
// while (i < 10)


// LOOP THROUGH ARRAY
const cars = ['Food', 'Chevy', 'Tesla', 'Audi', 'Benz', 'BMW']

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);

// }

// FOREACH LOOP
// cars.forEach(function(car, index, array) {
//     console.log(car);
// });


// MAP
// const users = [
//     {
//         id:1,
//         name: 'Admas'
//     },
//     {
//         id:2,
//         name: 'Muhammed'
//     },
//     {
//         id:3,
//         name:'Joshua'
//     }
// ];

// const ids = users.map(function(user) {
//     return user.id;
// });

// console.log(ids);


// FOR IN LOOP
const user = {
    // key : value  
    firstName: 'Adams',
    lastName: 'Doe',
    age: 40,
}

for (let x in user){
    console.log(`${x} : ${user[x]}`);
}



