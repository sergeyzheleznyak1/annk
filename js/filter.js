document.addEventListener('DOMContentLoaded', () => {
    const filterToggleButton = document.querySelector('.filter__toggle');
    const filterContent = document.querySelector('.filter__content');
    const filterCloseButton = document.querySelector('.filter__content-close-button');
    const filterForm = document.querySelector('.catalog__filter');
    const inputLeft = document.getElementById('input-left');
    const inputRight = document.getElementById('input-right');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const body = document.body;

    
    function openFilter() {
        filterContent.classList.add('active');
        filterToggleButton.classList.add('active');

        if (window.innerWidth <= 767) {
            body.classList.add('no-scroll');
        }
    }

    function closeFilter() {
        filterContent.classList.remove('active');
        filterToggleButton.classList.remove('active');

        if (window.innerWidth <= 767) {
            body.classList.remove('no-scroll');
        }
    }

    function clickOutsideFilter(event) {
        if (!filterForm.contains(event.target)) {
            closeFilter();
        }
    }

    filterToggleButton.addEventListener('click', openFilter);

    filterCloseButton.addEventListener('click', closeFilter);

    document.addEventListener('click', clickOutsideFilter);

    // Функция для обновления минимальной цены
    function updateLeftValue() {
        const minValue = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value) - 100); // Проверка, чтобы минимальное значение не превышало максимальное
        inputLeft.value = minValue;
        minPrice.value = minValue; // Обновляем поле "From"
    }

    // Функция для обновления максимальной цены
    function updateRightValue() {
        const maxValue = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value) + 100); // Проверка, чтобы максимальное значение не было меньше минимального
        inputRight.value = maxValue;
        maxPrice.value = maxValue; // Обновляем поле "To"
    }

    // Обработчик для слайдера "From"
    inputLeft.addEventListener('input', updateLeftValue);

    // Обработчик для слайдера "To"
    inputRight.addEventListener('input', updateRightValue);

    // Обновление полей при изменении вручную
    minPrice.addEventListener('input', () => {
        const value = Math.min(parseInt(minPrice.value), parseInt(inputRight.value) - 100);
        inputLeft.value = value;
        minPrice.value = value;
    });

    maxPrice.addEventListener('input', () => {
        const value = Math.max(parseInt(maxPrice.value), parseInt(inputLeft.value) + 100);
        inputRight.value = value;
        maxPrice.value = value;
    });
});