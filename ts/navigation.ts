const startMobileMenu = () => {
	getMobileMenu().addEventListener('onclick', () => {
		toggleNavigationMenu()
	});
	(getMobileNavigation().children[0] as HTMLDivElement).dataset.layout = 'mobile'
}

const toggleNavigationMenu = () => {
	getMobileMenu().classList.toggle('show')
	getMobileNavigation().classList.toggle('show')
}

const getMobileMenu = (): HTMLDivElement => document.querySelector('#mobile-menu')
const getMobileNavigation = (): HTMLDivElement => document.querySelector('#mobile-navigation')

window.addEventListener('load', startMobileMenu)
