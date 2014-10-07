function screenStaticScroll () {
	document.getElementById('screen-static').className += ' vertTranslate';
	setTimeout(function () {
		document.getElementById('screen-static').className = 'static';
	}, 12000)
	setTimeout(arguments.callee, 6000);
}
