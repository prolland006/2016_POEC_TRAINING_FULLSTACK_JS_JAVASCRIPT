class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static uneMethodStatique() {
        console.log('je suis statique');
    }
}

console.log(typeof Person); // function. La notion de classe en JS est du sucre syntaxique autour des fonctions constructeurs et des prototypes

class PersonWithAge extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }
}


var p = new Person("thomas", "gros");
var pa = new PersonWithAge("bob", "dylan", 65);
console.log(p);
console.log(pa);

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// Person.prototype.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };
//
// Person.uneMethodStatique = function () {
//     console.log('je suis statique');
// };

// Object.getPrototypeOf( ) === Person  // le prototype de la classe enfant est la classe parent