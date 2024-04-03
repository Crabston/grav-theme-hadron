const startMobileMenu = () => {
    getMobileMenu().addEventListener('onclick', () => {
        toggleNavigationMenu();
    });
    getMobileNavigation().children[0].dataset.layout = 'mobile';
};
const toggleNavigationMenu = () => {
    getMobileMenu().classList.toggle('show');
    getMobileNavigation().classList.toggle('show');
};
const getMobileMenu = () => document.querySelector('#mobile-menu');
const getMobileNavigation = () => document.querySelector('#mobile-navigation');
window.addEventListener('load', startMobileMenu);
