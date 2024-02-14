document.addEventListener('DOMContentLoaded', function () {
	setTimeout(openPopup, 10000)
})

function openPopup() {
	document.getElementById('popup').style.display = 'block'
}

function closePopup() {
	document.getElementById('popup').style.display = 'none'
}

function handleEmojiClick(emoji) {
	console.log('Выбран смайлик:', emoji)
}
