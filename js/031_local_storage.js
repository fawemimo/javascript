// set local storage item

// localStorage.setItem('name','Victor')

// set session storage item
// sessionStorage.setItem('name','Victor')

// const name = localStorage.getItem('name')

// console.log(name)


document.querySelector('form').addEventListener('submit', taskPerform);

function taskPerform(e) {
    e.preventDefault();
    const task = document.querySelector('#task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))        
    }
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved')
}


const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(dict)

function dict(task){
    console.log(task)
}
