/*
 JavaScript est un single-threaded, non-blocking, asynchronous, concurrent language...
 JavaScript a une call-stack, une event-loop, une callback queue, des apis, ...
 CF https://www.youtube.com/watch?v=8aGhZQkoFbQ

 JavaScript 'runs to completion',
 un callback dans la callback queue ne s'exécuter que si la callstack est vide
*/

function a() {
    console.log("A");
    b();
}

function b() {
    console.log("B");
}

a();

console.log('before');

// setTimeout est pas bloquant ?
// nouveau thread ?
// asynchrone ?
setTimeout((function() {
    console.log('1000ms plus tard...');
}), 1000);  // 0 imlique le même comportement web api -> callback queue -> call stack

console.log('after');
for(let i = 0; i < 100000; i++) {
    console.log('waiting');
}