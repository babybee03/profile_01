var header = document.querySelector('header');
var headerSize = header.getBoundingClientRect().height;

document.addEventListener('scroll', function(){
    if (window.scrollY > headerSize) {
        header.classList.add('header_color');
    } else {
        header.classList.remove('header_color');
    }
});