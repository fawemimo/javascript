

const  listItems =document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document getElementByTagName
const lis = document.getElementsByTagName('li');

// Convert HTML collectiion into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index) {
//     console.log(li.className);
//     li.textContent = `${index} : Hello`;
// });
// console.log(lis);

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
    item.textContent = `${index} : hELLO`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.style.background='#ccc';
});

for(let i = 0; i<liEven.length; i++) {
    liEven[i].style.background='#f4f4f4';
}


console.log(items);

