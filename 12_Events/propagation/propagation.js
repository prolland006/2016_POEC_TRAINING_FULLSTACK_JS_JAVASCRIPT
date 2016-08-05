let outerDiv = document.querySelector('.outer');
let innerDiv = document.querySelector('.inner');

outerDiv.addEventListener('click', function(e) {
    console.log('click outer');

    // e.currentTarget est l'élément sur lequel le listener s'est déclenché pendant la propagation de l'évènement.
    // e.target est l'élément sur lequel on a cliqué
    e.stopPropagation(); // cancelBubble dans les anciens IE.

}, true); // 3ème paramètre = useCapture (false par défaut, les listeners sont raccrochés dans la bubble phase)

innerDiv.addEventListener('click', function(e) {
    console.log('click inner');
}, true);

