const name = 'Adams';
const age = 33;
const job = 'Web Developer';
const city = 'Miami';
let html;


function hello(){
    return 'Hello'
}
// Without template strings (es6)

html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Function: ${hello()}</li>
    <li>Conditional Statement: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`



document.body.innerHTML = html;