class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  greeting() {
    return `Hello ${this.first_name}`;
  }
}

class Customer extends Person {
  constructor(first_name, last_name, phone, membership) {
    // calling the parent class constructor
    super(first_name, last_name);

    this.first_name = first_name;
    this.last_name = last_name;
  }

  static getMembershipCosts() {
    return 500
  }
}


const mary = new Customer('JOhn', 'Doe', '55-555-5--5','Gold')


console.log(mary.greeting())

console.log(Customer.getMembershipCosts())