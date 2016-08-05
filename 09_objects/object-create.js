let prototype = {
  f: function() {
      console.log('hello');
  }
};


let o = Object.create(prototype); // deuxième paramètre pour définir les propriétés de l'objet
console.log(o);