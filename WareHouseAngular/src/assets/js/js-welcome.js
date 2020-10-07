
var i = window.matchMedia("(min-width: 1200px)")
var x = window.matchMedia("(min-width: 992px) and (max-width: 1199.98px)")
var y = window.matchMedia("(min-width: 768px) and (max-width: 991.98px)")
var f = window.matchMedia("(min-width: 576px) and (max-width: 767.98px)")

function mediaQuery() {
    if (i.matches) { // If media query matches
        openNav("100%")
    } else if (x.matches) {
        openNav("100%")
    } else if (y.matches) {
        openNav("100%")
    } else if (f.matches) {
        openNav("100%")
    }
}

function openNav(sidenavHeight) {
    document.getElementById("sidenav").style.height = sidenavHeight;
    document.getElementById("sidenav").style.opacity = "1";
    document.getElementById("sidenav").style.transition = "1s";
}

function closeNav() {
    document.getElementById("sidenav").style.height = "0";
    document.getElementById("sidenav").style.transition = "1s";
    document.getElementById("sidenav").style.opacity = "0.1";
}
jQuery(document).ready(function ($) {
    setTimeout(function () {
        $('.trans--grow').addClass('grow');
    }, 275);
});
