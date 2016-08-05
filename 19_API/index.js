// fichier item.js
class Item {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
}

// fichier flickrService.js
function buildUrl(photo) {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
}
class FlickrService {
    constructor(api_key) {
        this.api_key = api_key;
    }

    getInteresting() {
        return new Promise((resolve, reject) => { // lexical this permet de capturer le this comme l'objet flickrApi

            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${this.api_key}&format=json&nojsoncallback=1`);
            xhr.onreadystatechange = function() {
                try {
                    if(xhr.readyState == 4) {

                        let jsonResponse = JSON.parse(xhr.responseText); // si cette operation est trop longue => la rendre asynchrone pour libérer un peu la call stack
                        if(jsonResponse.stat === 'fail') {
                            return reject(jsonResponse);
                        }

                        let items = jsonResponse.photos.photo.map( // si cette operation est trop longue => la rendre asynchrone pour libérer un peu la call stack
                            photo => new Item(photo.title, buildUrl(photo))
                        );

                        resolve(items);
                    }
                } catch(e) {
                    reject(e);
                }
            };
            xhr.ontimeout = function() { // TODO tester tous les autres events xhr et rejeter ceux qui correspondent a des erreurs
              reject(new Error('Time out'));
            };

            xhr.send();
        });
    }

}

// fichier app.js
let flickrService = new FlickrService('aaa4b9995ecedc077fca26cadc7ef8e5');
flickrService.getInteresting()
    .then(items => console.log(items))
    .catch(err => console.log(err));

// Ecrire les tests...

// Qui quand flickr ne retourne pas du json ???
// Est-ce que Flickr peut-renvoyer des erreurs ?
// Est-ce que XMLHttpRequest peut-renvoyer des erreurs ?
// Que se passe t'il si internet se coupe ?
// ...
