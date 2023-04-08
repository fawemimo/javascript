let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


val = listItem;
val = list;


// Get child nodes: return a node list
val = list.childNodes; 
val = list.childNodes[0].nodeName;
val = list.childNodes[7].nodeType

// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get the children element node: returns HTML collections and gives the element only
val = list.children;
list.children[1].textContent = 'This is testing text'

// Children of children
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count Child Elements
val = list.childrenElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

// Get parent of parent
val = listItem.parentElement.parentElement;

// Get siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get previous sibling
val = listItem.previousSibling;
// val = listItem.previousElementSibling;




console.log(val);
