/**
 Instructions habituelles: if, else, switch, for, while, do..while, label, break, continue,...
 */

for(var i = 0; i < 10; i++) {
    console.log("dans la boucle: ", i);
}

// attention avec var, le seul scope est fonction
console.log("hors de la boucle", i);

// itérer sur un tableau
let myArray = ["bonjour", "le", "monde"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// attention, piège, ne pas utiliser avec les tableau.
// for..in est a utiliser pour itérer sur les propriétés enumables des objets.
// l'ordre d'iteration n'est pas non plus garanti...
myArray.somethingMore = "hello";
Object.prototype.somethingMoreOnObject = "world";
for (let i in myArray) {
    console.log(i, myArray[i]);
}

// ES6 for..of
for(let i of myArray) {
    console.log(i);
}

// forEach
myArray.forEach(function(e) {
   console.log("forEach ", e);
});


