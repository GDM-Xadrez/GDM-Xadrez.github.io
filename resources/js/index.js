var navbar = document.getElementsByClassName("navbar");
window.onscroll = function() {
    console.log("Scrolling");
    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar[0].classList.remove('anim');
    } else {
        navbar[0].classList.add('anim');
    }
}
