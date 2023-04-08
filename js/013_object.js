const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    email: 'john@example.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'Sango'
    },
    getBirthYear: function(){
        return 1987;
    }
}

let val;

val = person.getBirthYear()
// console.log(val);

const people = [
    {
        id: 1,    
        name: 'John',
        age: 21,

    },
    {
        id: 2,    
        name: 'Smith',
        age: 25,

    },
    {
        id: 3,    
        name: 'John',
        age: 28,

    }
];

for( let i = 0; i < people.length; i ++) {
    console.log(people[i].name);
    console.log(people[i].age);

}
