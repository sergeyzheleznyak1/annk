document.addEventListener("DOMContentLoaded", () => {
    const quantityContainer = document.querySelector('.product__quantity');
    const quantityCount = quantityContainer.querySelector('.product__quantity-count');
    const addButton = quantityContainer.querySelectorAll('.product__quantity-button')[1];
    const removeButton = quantityContainer.querySelectorAll('.product__quantity-button')[0];

    // Начальное количество
    let quantity = parseInt(quantityCount.textContent);

    // Функция для обновления количества на странице
    function updateQuantity() {
        quantityCount.textContent = quantity;
    }

    // Обработчик для увеличения количества
    addButton.addEventListener('click', () => {
        quantity += 1;
        updateQuantity();
    });

    // Обработчик для уменьшения количества (с проверкой, чтобы не уйти в отрицательные значения)
    removeButton.addEventListener('click', () => {
        if (quantity > 1) { // Проверка, чтобы не уходить ниже 1
            quantity -= 1;
            updateQuantity();
        }
    });
});
