let html = document.documentElement;
let	resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

html.style.fontSize = 20 / 320 * html.clientWidth + 'px';
// html.style.fontSize = 20px;

window.addEventListener(resizeEvent, function () {
	html.style.fontSize = 20 / 320 * html.clientWidth + 'px';
}, false);

