// Person Contructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Mary-Joan", "Fawemimo");

// console.log(person1.greeting())

// Customer Constructor
function Customer(first_name, last_name, phone, membership) {
  Person.call(this, first_name, last_name);

  this.phone = phone;
  this.membership = membership;
}

// Inheriting the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer("Mary", "John", "555-555-555", "Gold");

console.log(customer1);

console.log(customer1.greeting());
