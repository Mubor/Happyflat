
console.log(document.querySelectorAll('.product__card'));

document.querySelectorAll('.product__card').forEach(() => {
    
    new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
})