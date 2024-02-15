const menuToggle = document.getElementById('menu__toggle')
const menuBtn = document.querySelector('.menu__btn')
const menuBox = document.querySelector('.hamburger__menu_box')

menuBtn.addEventListener('click', function () {
	if (menuToggle.checked) {
		menuBox.style.visibility = 'hidden'
		menuBox.style.left = '-54%'
	} else {
		menuBox.style.visibility = 'visible'
		menuBox.style.left = '0'
	}
})
