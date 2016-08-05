// callback hell
doSomethingSlow(function(data) {
    doAnotherSlowThing(function(data) {
        doAnotherVerySlowThing(function(data) {
        })
    });
});
