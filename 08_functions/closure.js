function a() {
    function b() {
        console.log('je suis b, je suis une closure');
    }

    b();
}

a();
// b();



function multiplyBy(val) { // outer function

    function multiplyByVal(n) { // <= notre closure, inner function
        // notre closure multiplyByVal a accès aux variables de sa outer function.
        // ces variables survivent tant que la inner function (la closure) survit.
        return val * n;
    }

    return multiplyByVal;
}

let mult3 = multiplyBy(3);
let mult4 = multiplyBy(4);

console.log(mult3);
console.log(mult4);

console.log(mult3(5));
console.log(mult4(5));