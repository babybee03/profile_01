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
const sizingBox = header.clientHeight;

document.addEventListener('scroll', function() {
    if(window.scrollY > sizingBox) {
        header.classList.add('change');
    } else {
        header.classList.remove('change');
    }
})

document.addEventListener('scroll',function(){
    if (window.scrollY > 100) {
        document.querySelector('#about').classList.add('show');
    } else {
        document.querySelector('#about').classList.remove('show');
    }
})



