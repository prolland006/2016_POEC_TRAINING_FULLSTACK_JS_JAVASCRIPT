/*
 https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error
 */

let myError = new Error('oups une erreur');
console.log(myError);
console.log('after error creation');

// throw myError; // en général on crée et lance l'erreur en même temps, throw new Error('oups....');
//console.log('after throw myError'); // ne sera pas exécuté car myError n'est pas catchée.


try {
    throw myError;
    console.log('after throw myError'); //<= unreachable code
} catch(e) {
    if(e instanceof SyntaxError) {
        //...
    } else if (e instanceof ReferenceError) {
        // ...
    }
    // else if(e instance of MyCustomError) {
    //
    // }
    else {
        console.log('inside catch');
        console.log(e);
    }
} finally {
    console.log("toujours exécuté, qu'une erreur ait été throw ou pas");
}
console.log('after try-catch');


function a() {
    console.log('avant b');
    b();
    console.log('apres b');
}

function b() {
    throw new Error('erreur dans b :-(');
}

try {
    a();
} catch(e) {
    console.log(e);
}