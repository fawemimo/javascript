// Function constructor
function Person(name, dob){
    this.name = name;
    // console.log(this)
    this.birthday = new Date(dob);

    // Method constructor
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
};

// this : refers to current instance of the object, when refers in the global scopes it make uses of the window object

// const wale = new Person('wale');
// const korede = new Person('korede');

const kola = new Person('kola', '03-27-1997');
console.log(kola.calculateAge());
