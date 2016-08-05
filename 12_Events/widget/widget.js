document
    .querySelector('.widget__header')
    .addEventListener('click', e => {
        e.preventDefault();

   document.querySelector('.widget__content')
       .classList.toggle('widget__content--hidden');

    document.querySelector('.widget__header__button-showhide')
        .classList.toggle('widget__header__button-showhide--hidden');
});