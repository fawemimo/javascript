// REPLACE ELEMENT

// create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('New Task Title'));


// Get the old Heading
const oldHeading = document.querySelector('#task-title');

// Get the Parent Element
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelector('li');
const list = document.querySelector('ul');

// Remove child element
// list.removeChild(lis[3]);


// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// classes
val = link.className;
val = link.classList[0]
link.classList.add('test');
link.classList.remove('test')
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link




console.log(val);