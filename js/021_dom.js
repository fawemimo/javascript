// DOM: Document Object Model
let val;

val = document
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;

val = document.links;
val = document.links[0].classList[0]

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');


let scripts = document.scripts;

let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
})

console.log(val)