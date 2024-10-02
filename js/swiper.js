document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        direction: "vertical",
        freeMode: true,
        mousewheel: {
            releaseOnEdges: true,
        },
        loop: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".product__arrow-button-next",
            prevEl: ".product__arrow-button-prev",
        },
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
