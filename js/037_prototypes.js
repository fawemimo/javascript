// Each object in js has prototype

// Object.prototype
// Person.prototype

// Function constructor
function Person(first_name, last_name, dob) {
  this.first_name = first_name;
  this.last_name = last_name;
  // console.log(this)
  this.birthday = new Date(dob);

  // Method constructor
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getMarried = function (lastName) {
  return (this.last_name = lastName);
};

Person.prototype.getFullName = function () {
  return `${this.first_name} ${this.last_name}`;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Joan", "June 19 2002");

console.log(mary.hasOwnProperty("first_name"));
console.log(mary.getMarried("Fawemimo"));
console.log(mary.getFullName());
