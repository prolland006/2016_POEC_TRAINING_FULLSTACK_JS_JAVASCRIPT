let o = {};
console.log(o);

o.title = 'un titre';

console.log(o);
console.log(o.title);
console.log(o.doesnotexist);

o.uneMethode = function() {
    console.log("je suis une méthode (fonction) de l'objet o");
};

console.log(o.uneMethode);
o.uneMethode();

// on peut définir via la syntaxe literale des propriétés et méthodes
let o2 = {
    title: 'le titre de o2',
    uneMethode: function() {
        console.log('je suis une méthode de o2')
    }
};

// nommage complexe
let o3 = {
    "un nom complexe": "possible avec double quotes, ce n'est quand même pas une bonne idée de nommer les propriétés comme ça..."
};

console.log(o3["un nom complexe"]);

let s = "title";
// accès dynamique aux propriétés
console.log(o2[s]);

for(let p in o2) {
    console.log(p, o2[p]);
}


// qques exemples

var thomas = {
    firstName: 'Thomas',
    lastName: 'Gros',
    fullName: function() {
        return this.lastName + ' ' + this.firstName;
    }
};

console.log(thomas.firstName);
console.log(thomas.lastName);
console.log(thomas.fullName());

let f = thomas.fullName;
console.log(f()); // attention à this est l'objet global ici...
firstName = 'dow';
//window.lastName = 'win';
console.log(f());






