window.addEventListener('scroll', function () {
	scrollToTopButton = document.getElementById('scroll-to-top')

	if (window.pageYOffset > 100) {
		scrollToTopButton.style.display = 'block'
	} else {
		scrollToTopButton.style.display = 'none'
	}
})

document.getElementById('scroll-to-top').addEventListener('click', function (event) {
	event.preventDefault() // Отменяем стандартное поведение ссылки

	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})
