import { languageDropdown } from './modules/languages.js';
import { cart } from './modules/cart.js';
import { mobileNav } from './modules/mobile-menu.js';
import { subMenu } from './modules/sub-menu.js';

document.addEventListener('DOMContentLoaded', () => {
    languageDropdown();
    cart();
    mobileNav();
    subMenu();
});