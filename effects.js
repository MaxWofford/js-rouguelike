function screenStaticScroll () {
	document.getElementById('screen-static').className = 'static';
	document.getElementById('screen-static').className += ' vertTranslate';
	console.info("trigger");
	setTimeout(arguments.callee, 60000);
}
