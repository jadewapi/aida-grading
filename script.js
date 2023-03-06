'use strict';

const main = document.querySelector('main');
const button = document.querySelector('.ass');


button.addEventListener('click', function(){
    main.classList.add('animate');
});

