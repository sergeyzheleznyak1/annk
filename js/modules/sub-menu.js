export const subMenu = () => {
    const menuItems = document.querySelectorAll('.has-submenu');

    // Функция закрытия всех подменю
    const closeAllSubMenus = () => {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
    };

    menuItems.forEach(item => {
        const mainLink = item.querySelector('a'); // Основная ссылка, по которой открывается подменю
        const submenu = item.querySelector('ul'); // Подменю, которое будет отображаться

        // Добавляем обработчик клика на основную ссылку
        mainLink.addEventListener('click', (event) => {
            // Проверка для сенсорных экранов
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
                event.preventDefault();
                
                // Закрываем все открытые подменю, кроме текущего
                menuItems.forEach(i => {
                    if (i !== item) {
                        i.classList.remove('active');
                    }
                });

                // Переключаем класс active для открытия или закрытия подменю
                item.classList.toggle('active');
            }
        });
    });

    // Обработчик клика по документу
    document.addEventListener('click', (event) => {
        const targetElement = event.target;

        // Проверяем, был ли клик за пределами любого элемента с классом has-submenu
        if (!targetElement.closest('.has-submenu')) {
            closeAllSubMenus(); // Закрываем все подменю
        }
    });
};
