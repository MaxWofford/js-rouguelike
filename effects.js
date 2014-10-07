function screenStaticScroll () {
	document.getElementById('screen-static').className += ' vertTranslate';
	setTimeout(function () {
		document.getElementById('screen-static').className = 'static';
	}, 6000)
	setTimeout(arguments.callee, 6000);
}
