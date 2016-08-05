o = {
    title: 'o',
    f: function() {
        console.log(this.title);
    }
};

o2 = {
    title: 'o2'
}

o2.f = o.f;

console.log(o2.f()); // ?