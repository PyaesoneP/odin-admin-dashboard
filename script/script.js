//get the star icons
let star1 = document.querySelector('#star1');
let star2 = document.querySelector('#star2');
let star3 = document.querySelector('#star3');
let star4 = document.querySelector('#star4');
let star5 = document.querySelector('#star5');
let star6 = document.querySelector('#star6');

//initial state of the icons
let star1Clicked = false;
let star2Clicked = false;
let star3Clicked = false;
let star4Clicked = false;
let star5Clicked = false;
let star6Clicked = false;

//add the event listeners to the icons
star1.addEventListener('click', () => {
    if (star1Clicked === false) {
        star1Clicked = true;
        star1.style.filter = 'invert(80%) sepia(73%) saturate(604%) hue-rotate(344deg) brightness(99%) contrast(98%)';
    } else {
        star1Clicked = false;
        star1.style.filter = 'none';
    }
})
star2.addEventListener('click', () => {
    if (star2Clicked === false) {
        star2Clicked = true;
        star2.style.filter = 'invert(80%) sepia(73%) saturate(604%) hue-rotate(344deg) brightness(99%) contrast(98%)';
    } else {
        star2Clicked = false;
        star2.style.filter = 'none';
    }
})
star3.addEventListener('click', () => {
    if (star3Clicked === false) {
        star3Clicked = true;
        star3.style.filter = 'invert(80%) sepia(73%) saturate(604%) hue-rotate(344deg) brightness(99%) contrast(98%)';
    } else {
        star3Clicked = false;
        star3.style.filter = 'none';
    }
})
star4.addEventListener('click', () => {
    if (star4Clicked === false) {
        star4Clicked = true;
        star4.style.filter = 'invert(80%) sepia(73%) saturate(604%) hue-rotate(344deg) brightness(99%) contrast(98%)';
    } else {
        star4Clicked = false;
        star4.style.filter = 'none';
    }
})
star5.addEventListener('click', () => {
    if (star5Clicked === false) {
        star5Clicked = true;
        star5.style.filter = 'invert(80%) sepia(73%) saturate(604%) hue-rotate(344deg) brightness(99%) contrast(98%)';
    } else {
        star5Clicked = false;
        star5.style.filter = 'none';
    }
})
star6.addEventListener('click', () => {
    if (star6Clicked === false) {
        star6Clicked = true;
        star6.style.filter = 'invert(80%) sepia(73%) saturate(604%) hue-rotate(344deg) brightness(99%) contrast(98%)';
    } else {
        star6Clicked = false;
        star6.style.filter = 'none';
    }
})