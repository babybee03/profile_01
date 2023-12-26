/*
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header_menu");

hamburger.addEventListener("click", function() {
    navMenu.classList.toggle("open");
});

navMenu.addEventListener("click", function() {
    navMenu.classList.remove("open");
});
*/

const hamburger = document.querySelector('.hamburger');
const headerMenu = document.querySelector('.header_menu')
hamburger.addEventListener('click', function(){
    headerMenu.classList.toggle('open');
})
headerMenu.addEventListener('click', function(){
    headerMenu.classList.remove('open');
})