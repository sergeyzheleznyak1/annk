export const cart = () => {
    const bag = document.querySelector('.bag');
    const fade = document.querySelector('.fade');
    const bagCloseButton = document.querySelector('.bag__close');
    const bagOpenButton = document.querySelector('.header__cart');
    const body = document.body;

    // Функция для показа корзины и фейда
    function showBag() {
        bag.classList.add('active');
        fade.classList.add('active');
        body.classList.add('no-scroll');
    }

    // Функция для скрытия корзины и фейда
    function hideBag() {
        bag.classList.remove('active');
        fade.classList.remove('active');
        body.classList.remove('no-scroll');
    }

    // Открыть корзину по клику на кнопку
    bagOpenButton.addEventListener('click', showBag);

    // Закрыть корзину по клику на крестик
    bagCloseButton.addEventListener('click', hideBag);

    // Закрыть корзину по клику на фейд
    fade.addEventListener('click', hideBag);
};