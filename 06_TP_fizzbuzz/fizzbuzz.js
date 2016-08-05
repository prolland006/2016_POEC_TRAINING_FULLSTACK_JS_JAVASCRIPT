/**
 * Pour tous les nombres de 0 à 100.
 * Si le nombre est mutiple de 3, afficher "nombre FIZZ";
 * Si le nombre est mutiple de 5, afficher "nombre BUZZ";
 * Si le nombre est mutiple de 3 et de 5, afficher "nombre FIZZBUZZ";
 */

for(let i = 0; i <= 100; i++) {
    if( (i % 3 == 0) && (i % 5 == 0)) {
        console.log(i + " FIZZBUZZ");
    } else {
        if( i % 3 == 0) {
            console.log(i + " FIZZ");
        } else if ( i% 5 == 0) {
            console.log(i + " BUZZ");
        }
    }
}