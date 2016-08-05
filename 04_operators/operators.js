/*
Operateurs standards disponibles:
+, -, *, /, %, &&, ||, ++, --, ?:, bitwise operators, +=, -=, *=,...
 */

let a = 15;

let b = 0;
if(a > 6) {
    b = 10;
} else {
    b = 8;
}

let c = a > 6 ? 10 : 8;

// le + concatène
let string = "hello" + " " + " world";
console.log(string);

console.log("37" - 7);
console.log("37" + 7);

// == conversion de type si besoin
console.log("7" == 7);

// === pas de conversion de type, les types sont aussi comparés
console.log("7" === 7);


