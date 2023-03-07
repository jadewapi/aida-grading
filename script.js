'use strict';


const main = document.querySelector('.main');
const userName = document.querySelector('.userName');

userName.addEventListener('click', function(){
    main.classList.add('animate');
})
