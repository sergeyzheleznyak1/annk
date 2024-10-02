import { languageDropdown } from './modules/languages.js';
import { cart } from './modules/cart.js';
import { filter } from './modules/filter.js';

document.addEventListener('DOMContentLoaded', () => {
    languageDropdown();
    cart();
    filter();
});