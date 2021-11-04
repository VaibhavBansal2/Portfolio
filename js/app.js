$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotClass: 'slick-dots',
        autoplay: true
    });

    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobilenav = document.querySelector('.mobile-nav');
    let home = document.querySelector('.home-h');
    let about = document.querySelector('.about-h');
    let services = document.querySelector('.services-h');
    let works = document.querySelector('.works-h');
    let blogs = document.querySelector('.blogs-h');
    let contact = document.querySelector('.contact-h');

    hamburger.addEventListener('click', function () {
        mobilenav.classList.add('open');
    });
    times.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    });
    home.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    });
    about.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    });
    services.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    });
    works.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    });
    blogs.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    });
    contact.addEventListener('click', function () {
        mobilenav.classList.remove('open');
    });
});