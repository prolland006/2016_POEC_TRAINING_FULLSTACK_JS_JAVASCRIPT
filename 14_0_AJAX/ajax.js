/* https://fr.wikipedia.org/wiki/XMLHttpRequest */

let xhr = new XMLHttpRequest();

// definir la ressource a atteindre et la maière de l'atteindre
xhr.open('GET', 'http://uifaces.com/api/v1/random');

// accrocher un listener pour réagir aux changements d'états de l'objet
xhr.onreadystatechange = function () {

    console.log(xhr.readyState);
    if(xhr.readyState == 4) {
        console.log(xhr.status);
        let divRandom = document.querySelector('.random');

        let o = JSON.parse(xhr.responseText);
        console.log(o);
        divRandom.innerHTML = `
        <h1>${o.username}</h1>
        <img src="${o.image_urls.epic}">
        `;
    }

};

xhr.send(); // la requête HTTP est envoyée
