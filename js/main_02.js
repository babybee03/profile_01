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

const aa = document.querySelector('.testimonial_img');
const bb = document.querySelector('.testimonial_bubble');
aa.addEventListener('click', function(){
    bb.style.color = "red"; 
});