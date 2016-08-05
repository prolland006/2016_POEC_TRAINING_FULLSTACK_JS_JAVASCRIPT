// usage comple de fetch ici https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
fetch('http://uifaces.com/api/v1/random')
    .then(response => response.json())
    .then(json => console.log(json));