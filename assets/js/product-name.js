$(document).ready(function () {
    let productSlider = $("#product-slider");
    let relatedProductSlider = $("#related-product-slider");
    productSlider.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<div class="slick-arrow prev"><span class="fa-solid fa-angles-left"></span></div>',
                    '<div class="slick-arrow next"><span class="fa-solid fa-angles-right"></span></div>'],
        dots: false,
        responsive: {
            0: {
                items: 0
            },
            568: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    
    relatedProductSlider.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<div class="slick-arrow prev"><span class="fa-solid fa-angles-left"></span></div>',
                    '<div class="slick-arrow next"><span class="fa-solid fa-angles-right"></span></div>'],
        dots: false,
        responsive: {
            0: {
                items: 0
            },
            568: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
})