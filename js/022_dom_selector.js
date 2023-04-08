// document.getElementById()

console.log(document.getElementById('task-title'));
// console.log(document.getElementById('task-title').className);


// changing styles 
// document.getElementById('task-title').style.background ='#333'


// change content
document.getElementById('task-title').textContent = 'Task List Title';

document.getElementById('task-title').innerText = 'The New List'
document.getElementById('task-title').innerHTML = '<span style = "color:red">Task List Title</span>'


document.querySelector('li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'purple';

