/* Immediatly Invoked Function Expression */
// souvent utilisé pour faire des modules, ne pas polluer le scope global, etc...

// (function () {
//     console.log("coucou, je suis une IIFE");
// })()
//
// (function() { console.log("coucou")})();


(function() {
    var a = 1; // a et b sont locales à la fonction et ne "polluent" pas l'environnement global
    var b = 2;

    console.log(a + b);
}) ();



