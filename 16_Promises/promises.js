/*
Le standard ES 6 suit l'approche Promises/A+, https://promisesaplus.com/
Il existe d'autres librairies de promises: Q, BlueBird,
*/

/*
From https://promisesaplus.com/

A promise represents the eventual result of an asynchronous operation.

The primary way of interacting with a promise is through its then method,
which registers callbacks to receive either a promise’s eventual value
or the reason why the promise cannot be fulfilled.
 */

/*** Création de promises ***/
// let p = new Promise(function(resolve, reject) {
//     // faire traitement...
//     if(/* condition */) {
//         resolve(/* value */); // fulfilled successfuly
//     } else {
//         reject(/* reason */); // rejected, an error occured
//     }
// });

/*
    Une promesse a 3 états:
    - pending
    - resolved
    - rejected
 */
// let p = new Promise(function(resolve, reject) {
//     resolve(42);
// });
// Promise.resolve(42); // immediatly resolved promise
// Promise.reject(new Error('oups...')); // immediatly rejected promise


/*** Consommer des promises ***/
let p = Promise.resolve(42);
p
    .then(val => val + 1) // function(val) { return Promise.resolve(val + 1) }
    .then(val => console.log(val)) // 43  function(val) { return Promise.resolve(undefined) }
    .then(val => console.log(val)); // undefined

let p2 = Promise.resolve('hello');
console.log('before');
p2.then(str => console.log(str));
console.log('after');

/* refonte simpliste de fetch avec des promises */
function myFetch(url) {

    let p = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                resolve(xhr.responseText);
            }
        };
        xhr.send();
    });
    return p;
}

myFetch('http://uifaces.com/api/v1/random')
    .then(data => console.log(data));


/* Gestion des erreurs */
let randomP = new Promise(function(resolve, reject) {
    /* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math */
    let random = Math.random();
    if(random < 0.5) {
        resolve('la promise est resolved');
    } else {
        reject('la promise est rejected');
        // throw new Error('la promise est rejected'); // autre manière de rejeter la promise.
        // reject(new Error('la promise est rejected');
    }
});

// randomP.then(
//     val => console.log("ici c'est resolu", val),
//     val => console.log("ici c'est rejected", val)
// );

randomP
    .then(val => console.log("ici c'est resolu", val))
    .catch(val => console.log("ici c'est rejected", val));

// maPromise
//     .then()
//     .then()
//     .then()
//     .catch() // le catch sera appelé si une des promises dans la chaine est rejected.