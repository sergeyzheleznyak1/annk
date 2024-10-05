export const languageDropdown = () => {
    const languageButton = document.querySelector('.header__language-button');
    const languageList = document.querySelector('.header__language-list');
    const languageItems = document.querySelectorAll('.header__language-item');

    // Настраиваем aria-атрибуты при загрузке
    languageButton.setAttribute('aria-haspopup', 'listbox');
    languageButton.setAttribute('aria-expanded', 'false');
    languageList.setAttribute('role', 'listbox');

    // Начальная настройка для элементов списка
    languageItems.forEach((item, index) => {
        item.setAttribute('role', 'option');
        item.setAttribute('aria-selected', 'false');
        // Первому элементу даем фокус
        item.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });

    // Функция для открытия/закрытия списка языков
    const toggleLanguageList = () => {
        const isExpanded = languageButton.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            languageButton.setAttribute('aria-expanded', 'false');
            languageList.classList.remove('active'); // Убираем класс для скрытия списка
        } else {
            languageButton.setAttribute('aria-expanded', 'true');
            languageList.classList.add('active'); // Добавляем класс для отображения списка
        }
    };

    // Функция для обновления выбранного языка
    const updateSelectedLanguage = (selectedItem) => {
        const selectedLang = selectedItem.dataset.lang || selectedItem.textContent.trim();
        
        // Обновляем текст кнопки на выбранный язык
        languageButton.textContent = selectedLang.toUpperCase();

        // Обновляем aria-атрибуты для выбранного элемента
        languageItems.forEach(item => item.setAttribute('aria-selected', 'false'));
        selectedItem.setAttribute('aria-selected', 'true');

        // Закрываем подменю
        languageButton.setAttribute('aria-expanded', 'false');
        languageList.classList.remove('active');
    };

    // Обработчик выбора языка для всех элементов списка
    languageItems.forEach(item => {
        item.addEventListener('click', () => {
            updateSelectedLanguage(item); // Вызываем функцию для обновления выбранного языка
        });
    });

    // Универсальный обработчик для открытия и закрытия меню по клику для всех устройств
    languageButton.addEventListener('click', (event) => {
        event.preventDefault();
        toggleLanguageList();
    });

    // Закрытие списка при клике вне области
    document.addEventListener('click', (event) => {
        const targetElement = event.target;

        // Если клик не на кнопке и не в списке, закрываем меню
        if (!languageButton.contains(targetElement) && !languageList.contains(targetElement)) {
            languageButton.setAttribute('aria-expanded', 'false');
            languageList.classList.remove('active');
        }
    });
};
