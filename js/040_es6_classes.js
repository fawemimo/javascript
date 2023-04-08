class Person {
  constructor(first_name, last_name, dob) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.dob = new Date(dob);
  }
  // any the added to the class is gonna added to the prototype

  greeting() {
    return `Hello dear ${this.first_name}`;
  }

  calculateAge() {
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMArried(newName) {
    this.last_name = newName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Joan", "6-19-2002");

mary.getMArried("FAwemimo");
console.log(mary.calculateAge());

console.log(mary);

console.log(Person.addNumbers(1, 2));
