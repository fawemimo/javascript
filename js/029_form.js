const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');

taskInput.value = '';


taskInput.addEventListener('keydown', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);

    heading.innerText = e.target.value;

}




