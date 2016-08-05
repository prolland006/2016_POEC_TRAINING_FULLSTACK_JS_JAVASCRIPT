function a(f) {
    console.log(f);
    console.log(f());
}

function b() {
    console.log("je suis b");
}

a(b);


[1,2,3,4,5].forEach(function(e) {
    console.log(e);
});

let phrase = ['bonjour', 'le', 'monde'];

let filterStringsSmallerThan3 = function(s) {
    return s.length >= 3;
};

let phraseFiltered = phrase.filter(filterStringsSmallerThan3);
console.log(phraseFiltered);


let mapReverse = function(s) {
    return s.split('').reverse().join('');
};

let phraseMapped = phraseFiltered.map(mapReverse);
console.log(phraseMapped);


let stringReducer = function(acc, cur) {
    return acc + cur;
};


let res = phraseMapped.reduce(stringReducer, '');
console.log(res);

let resOneLine = phrase.filter(filterStringsSmallerThan3)
                       .map(mapReverse)
                       .reduce(stringReducer);

// Calculer la somme des carrés (n*n) pour les nombres pairs
let data = [1,2,3,4,5,6,7,8,9,10];
res = data
        .filter(function(e) {
            return e % 2 == 0;
        })
        .map(function(e) {
            return e * e;
        })
        .reduce(function(acc, e) {
            return acc + e
        }, 0);



















