let clickLink = document.querySelector("#click-link");

// les noeuds de type Elements sont des EventTarget
// l'objet Document, l'objet Window, ainsi que d'autres objets (XMLHttpRequest)


// le callback sera appelé en réaction à l'évènement
clickLink.addEventListener('click', function(e) { // anciens IE utiliser attachEvent
    e.preventDefault();
    console.log(e);
});

// proscrire
// clickLink.onclick = function (e) {};

// proscrire également les onXXX au niveau des éléments HTML
// ex: <div onclick="...">


// KeyboardEvents
document.querySelector("#digits")
        .addEventListener('keypress', function(e) {
    /*
     event.key est le standard mais mal supporté aujourd'hui encore, voir
     - http://caniuse.com/#search=KeyboardEvent
     - http://www.w3.org/TR/uievents/
     - https://w3c.github.io/uievents/#widl-KeyboardEventInit-keyCode

     Pour un support plus complet des navigateurs, voir a dégrader en utilisant keycode, cf https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
     Pour l'historique, voir https://www.w3.org/TR/uievents/#keys
    */

    let supportedKeys = [
        '0','1','2','3','4','5','6','7','8','9',
        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'End', 'Home'
    ];

    // if(supportedKeys.indexOf(e.key) === -1) {
    if(! supportedKeys.includes(e.key)) { // ES 2016 includes !
        // il est possible de comparer lexicographiquement des chaines de caractères en JS, voir la spec EcmaScript
        // http://stackoverflow.com/questions/14687876/how-do-the-javascript-relational-comparison-operators-coerce-types
        e.preventDefault();
    }
});