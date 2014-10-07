function notify (message, options) {
	document.getElementById('game-area').innerHTML = "";
	var messageBox = document.createElement("p");
	messageBox.innerHTML = message;
	document.getElementById('game-area').appendChild(messageBox);
}