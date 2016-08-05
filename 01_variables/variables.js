/* utilisé pour déclarer des variables globales ou locales */
var a = 42;
console.log(a);
a = 'tiens si je changeais de type...';
console.log(a);

var b;
console.log(b); // undefined si pas d'affectation

//la variable non déclarée est quand même créée dans ce cas
c = 'hello';
console.log(c);

// console.log(d); // ReferenceError: d is not defined
// // ne s'affiche pas, l'exécution du script est stoppée
// console.log("coucou ?");

// variable ES 6
let maVariableES6 = 'bonjour';
// constante
const MA_CONSTANTE_ES6 = "le monde";

/*
Le nom d'une variable doit
- commencer par une lettre [a-zA-Z], ou un underscore _ (underscore.js, lodash) ou un $ (jQuery)
- ensuite les caractères suivants peuvent être des chiffres
- il est possible d'utiliser des caractères unicode dans le nom des variables

JavaScript est case sensitive
 */
let $_123 = 123;

/*
Types de base
 */
let number = 123456;
let otherNumber = 56.32;
let someHexNumber = 0xFF0066;
let binaryNumber = 0b01010101;

let boolean = true; // or false

let string = 'hello world'; // single ou double quotes

let iAmUndefined = undefined;
let iAmNull = null;


/*
    Variable Scope
 */
var globalVariable = "Je suis une variable 'globale'";
let uneAutreVariableGlobale = "Je suis aussi une variable globale";

if(true) {
    var jeNeSuisPasLocaleAuIf = "pas locale au if...";
    let etMoiMonScopeEstLeBlockIf = "'locale au if' ?";
}

console.log(jeNeSuisPasLocaleAuIf);
// Uncaught ReferenceError: etMoi is not defined
// console.log(etMoiMonScopeEstLeBlockIf);

function uneFonction() {
    var uneFonctionVar1 = 1; // locale
    let uneFonctionVar2 = 2; // locale
    uneFonctionVar3 = 3; // globale
}

uneFonction();
console.log(uneFonctionVar3);

// Objet GLOBAL
// les variables globales sont des propriétés de l'objet GLOBAL
// dans un navigateur l'objet GLOBAL est window
console.log(a);
console.log(window.a);
window.console.log(window.a);



















