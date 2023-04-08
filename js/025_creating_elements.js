// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add ID
li.id = 'new-item';

// Add Attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create link element
const link = document.createElement('a');

// Add class 
link.className = 'delete-item secondary-content'

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append Link INTO LI
li.appendChild(link);

// Append li as child
document.querySelector('ul.collection').appendChild(li);
// console.log(link);
console.log(li);