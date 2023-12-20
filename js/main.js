const header = document.querySelector(".header");
const headerHeight = header.clientHeight;

document.addEventListener("scroll", function() {
    if(window.scrollY > headerHeight) {
        header.classList.add("header-dark");
    } else {
        header.classList.remove("header-dark");
    }
});
