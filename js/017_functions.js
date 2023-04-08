// FUNCTION DECLARATIONS 

function greet(firstName = 'Adams', lastName = 'Muhammed'){
    return `Hello ${firstName} ${lastName}`
}

// console.log(greet());

// FUNCTIONS EXPRESSIONS

// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo: ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo....');
}

todo.add();
todo.edit(22);
todo.delete();


