// INPUT2

// Получаем элементы с иконками и полем инпут2
const iconUpInput2 = document.querySelector('.label2 img:first-child')
const iconDownInput2 = document.querySelector('.label2 img:last-child')
const input2 = document.querySelector('#input2')
input2.style.fontFamily = '"Work Sans", sans-serif'
input2.style.fontSize = '16px'
input2.style.color = '#3448AD'

// Устанавливаем обработчик события click на иконку с увеличением значения
iconUpInput2.addEventListener('click', function () {
	// Получаем текущее значение поля инпут2

	let value = parseInt(input2.value)
	if (isNaN(value)) {
		input2.value = 'Пусто'
	} else {
		input2.value = value + 1
	}
})

// Устанавливаем обработчик события click на иконку с уменьшением значения
iconDownInput2.addEventListener('click', function () {
	// Получаем текущее значение поля инпут2
	let value = parseInt(input2.value)
	// Уменьшаем значение на 1, если оно больше 0
	if (value > 0) {
		input2.value = value - 1
	}
})

// INPUT4

// Получаем элементы с иконками и полем инпут2
const iconUpInput4 = document.querySelector('.label4 img:first-child')
const iconDownInput4 = document.querySelector('.label4 img:last-child')
const input4 = document.querySelector('#input4')
input4.style.fontFamily = '"Work Sans", sans-serif'
input4.style.fontSize = '16px'
input4.style.color = '#3448AD'

// Устанавливаем обработчик события click на иконку с увеличением значения
iconUpInput4.addEventListener('click', function () {
	// Получаем текущее значение поля инпут2

	let value = parseInt(input4.value)
	if (isNaN(value)) {
		input4.value = 'Пусто'
	} else {
		input4.value = value + 1
	}
})

// Устанавливаем обработчик события click на иконку с уменьшением значения
iconDownInput4.addEventListener('click', function () {
	// Получаем текущее значение поля инпут2
	let value = parseInt(input4.value)
	// Уменьшаем значение на 1, если оно больше 0
	if (value > 0) {
		input4.value = value - 1
	}
})
