document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        mousewheel: false,
        loop: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "fraction",
        },
        navigation: {
            nextEl: ".product__arrow-button-next",
            prevEl: ".product__arrow-button-prev",
        },
        breakpoints: {
            768: {
                mousewheel: true
            }
        }
        // effect: "creative",
        // creativeEffect: {
        //     prev: {
        //       shadow: true,
        //       translate: [0, 0, -400],
        //     },
        //     next: {
        //       translate: [0, "100%", 0],
        //     },
        // },
    });
});
