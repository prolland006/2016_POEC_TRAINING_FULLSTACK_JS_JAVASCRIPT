// Les fonctions constructeur commencent par une majuscule.
// Elles ne servent qu'a construire des objets.
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    // this.fullName = function () {
    //     return this.firstName + ' ' + this.lastName;
    // }
}

let prototype = {
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

Person.prototype = prototype; // on écrase le prototype, mais on aurait pu l'augmenter aussi

// new ConstructorFunction va
// 1) créer un objet vide, équivalent de {}
// 2) appeler le constructeur dans le contexte de l'objet, équivalent de {}.Person(...,...)
// 3) 'associe' l'objet Person.prototype comme prototype des objets construits, équivalent de {}.__proto__ = Person.prototype
let p1 = new Person("Bob", "Dylan");
let p2 = new Person("Jimmy", "Hendrix");

console.log(p1);
console.log(p1.fullName());
console.log(p2);
console.log(p2.fullName());