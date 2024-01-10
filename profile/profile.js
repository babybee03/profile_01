var menu_all = document.querySelector(".menu_all");
var phone_menu = document.querySelector('.phone_menu');
var main = document.querySelector('main');
phone_menu.addEventListener('click', function(){
    menu_all.classList.toggle('open');
})
main.addEventListener('click', function(){
    menu_all.classList.remove('open');
})

var plus_1 = document.querySelector('#plus_1');
var wrap_1 = document.querySelector('#wrap_1');

plus_1.addEventListener('click', function(){
    wrap_1.classList.toggle('fold');})

var plus_2 = document.querySelector('#plus_2');
var wrap_2 = document.querySelector('#wrap_2');

plus_2.addEventListener('click', function(){
    wrap_2.classList.toggle('fold');})

var plus_3 = document.querySelector('#plus_3');
var wrap_3 = document.querySelector('#wrap_3');

plus_3.addEventListener('click', function(){
    wrap_3.classList.toggle('fold');})

var header = document.querySelector('header');
var change = document.querySelectorAll('.left a')
var headerLength = header.clientHeight;

var img_1 = document.querySelector(".img_1");
var img_2 = document.querySelector(".img_2");
var img_3 = document.querySelector(".img_3");

document.addEventListener('scroll', function (){
    if (window.scrollY > headerLength) {
        header.classList.add('fix');
        img_1.setAttribute("src", "image/instagram_1.svg");
        img_2.setAttribute("src", "image/facebook_1.svg");
        img_3.setAttribute("src", "image/youtube_1.svg");
        
    } else {
        header.classList.remove('fix');
        img_1.setAttribute("src", "image/instagram.svg");
        img_2.setAttribute("src", "image/facebook.svg");
        img_3.setAttribute("src", "image/youtube.svg");
    }
})
