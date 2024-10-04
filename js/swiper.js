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
    });

    function updateMousewheel() {
        if (window.innerWidth >= 768) {
            swiper.params.mousewheel.enabled = true;
            swiper.mousewheel.enable();
        } else {
            swiper.params.mousewheel.enabled = false;
            swiper.mousewheel.disable();
        }
    }

    updateMousewheel();

    window.addEventListener('resize', updateMousewheel);
});
