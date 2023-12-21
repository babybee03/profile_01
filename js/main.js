/*
const header = document.querySelector(".header");
const headerHeight = header.clientHeight;

document.addEventListener("scroll", function() {
    if(window.scrollY > headerHeight) {
        header.classList.add("header-dark");
    } else {
        header.classList.remove("header-dark");
    }
});
*/
const header = document.querySelector('.header');
const headerRect = header.clientHeight;

document.addEventListener('scroll', function() {
    if (window.scrollY > headerRect) {
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }
});


const suddenly = document.querySelector('#home');
const happen = suddenly.clientHeight;

document.addEventListener('scroll', function() {
    if (window.scrollY > happen) {
           
        document.querySelector("#about").classList.add('appear');
    } else {
        document.querySelector("#about").classList.remove("appear");
    }
});