/*
const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;
const topButton = document.querySelector(".arrow_up");

document.addEventListener("scroll", function() {
   home.style.opacity = 1 - Math.min((window.scrollY / homeHeight), 1);

    if(window.scrollY > homeHeight / 2) {
        topButton.style.opacity = 1;
    } else {
        topButton.style.opacity = 0;
    }
});
*/

const home = document.querySelector('.home_container');
const homeHeight = document.querySelector('.arrow_up');

document.addEventListener('scroll', function(){
    home.style.opacity = 1 - Math.min((window.scrollY / home.offsetHeight), 1);
})

document.addEventListener('scroll', function(){
 if (window.scrollY > home.offsetHeight / 2) {
    homeHeight.style.opacity = 1;
 } else {
    homeHeight.style.opacity = 0;
 }
})
