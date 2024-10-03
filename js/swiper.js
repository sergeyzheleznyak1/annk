document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        // direction: "horizontal",
        // freeMode: false,
        mousewheel: true,
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
        // breakpoints: {
        //     768: {
        //         direction: "vertical",
        //         // freeMode: true,
        //         mousewheel: {
        //             releaseOnEdges: true,
        //         },
        //     }
        // }
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
