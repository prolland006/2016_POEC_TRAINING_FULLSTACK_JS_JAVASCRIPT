function helloWorld() {
    console.log("hello world");
}

helloWorld();


function helloWorldWithParameters(a,b,c) {
    console.log(a,b,c);
}

helloWorldWithParameters(1,2,3);
helloWorldWithParameters();
helloWorldWithParameters(1,2);

// arguments permet d'obtenir les paramètres d'une fonction
// dynamiquement
function helloWorldWithoutParameters() {
    console.log(arguments);
}

helloWorldWithoutParameters("bonjour", "le", "monde");

// toutes les fonctions retournent une valeur.
// undefined si pas de return explicite
let result = helloWorld();
console.log(result); // undefined

function helloWorldReturn() {
    return "hello world";
}
console.log(helloWorldReturn());


// Function Expression
let helloWorldFunctionExpression = function () {
    console.log("hello world");
};

console.log(helloWorldFunctionExpression);
helloWorldFunctionExpression();







