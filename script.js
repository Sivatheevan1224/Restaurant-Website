let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll =()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active') 
}

document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active') 
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true ,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1, // 1 slide per view on small screens
        },
        640: {
            slidesPerView: 2, // 2 slides per view on medium screens
        },
        768: {
            slidesPerView: 2, // 2 slides per view on tablets
        },
        1024: {
            slidesPerView: 3, // 3 slides per view on larger screens
        },
    },
});
