/*
 les arrow functions
 - simplifient l'écriture
 - lexical this (ne bind pas son propre this, arguments, super, ou new.target)
 */

// Calculer la somme des carrés (n*n) pour les nombres pairs
let data = [1,2,3,4,5,6,7,8,9,10];
res = data
    .filter(e =>  e % 2 == 0)
    .map(e => e * e)
    .reduce((acc, e) => acc + e, 0);


let helloWorld = () => { console.log("hello world") };

helloWorld();