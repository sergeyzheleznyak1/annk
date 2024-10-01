export const languageDropdown = () => {
    const languageButton = document.querySelector('.header__language-button');
    const languageList = document.querySelector('.header__language-list');
    const languageItems = document.querySelectorAll('.header__language-item');
  
    // Настраиваем aria-атрибуты при загрузке
    languageButton.setAttribute('aria-haspopup', 'listbox');
    languageButton.setAttribute('aria-expanded', 'false');
    languageList.setAttribute('role', 'listbox');
    
    languageItems.forEach((item, index) => {
        item.setAttribute('role', 'option');
        item.setAttribute('aria-selected', 'false');
        // Первому элементу даем фокус
        item.setAttribute('tabindex', index === 0 ? '0' : '-1'); 
    });
  
    // Обработчик выбора языка
    languageItems.forEach(item => {
        item.addEventListener('click', () => {
            item.dataset.lang;
            const selectedText = item.textContent.trim();

            // Обновляем текст кнопки
            languageButton.textContent = selectedText;
  
            // Обновляем aria-атрибуты для выбранного элемента
            languageItems.forEach(li => li.setAttribute('aria-selected', 'false'));
            item.setAttribute('aria-selected', 'true');
            languageButton.setAttribute('aria-expanded', 'false');
        });
    });
  
    // Обработчик наведения (hover) для открытия дропдауна
    languageButton.addEventListener('mouseenter', () => {
        languageButton.setAttribute('aria-expanded', 'true');
    });
  
    // Закрытие дропдауна при покидании области
    languageButton.addEventListener('mouseleave', () => {
        languageButton.setAttribute('aria-expanded', 'false');
    });
};
  