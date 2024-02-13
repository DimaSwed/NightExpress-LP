ymaps.ready(init)

function init() {
	// Указываем адрес
	const address = 'Москва, ул. Иловайская, дом 3, строение 18'

	// Создаем экземпляр карты, привязываем его к элементу div с id "map"
	const myMap = new ymaps.Map('map', {
		center: [55.752, 37.617],
		zoom: 12
	})

	// Запрашиваем координаты по адресу
	ymaps
		.geocode(address, {
			results: 1 // Ограничиваем количество результатов
		})
		.then(function (res) {
			// Получаем первый результат геокодирования
			var firstGeoObject = res.geoObjects.get(0)

			// Устанавливаем центр карты по координатам объекта
			myMap.setCenter(firstGeoObject.geometry.getCoordinates())

			// Добавляем метку на карту
			myMap.geoObjects.add(firstGeoObject)
		})
}
