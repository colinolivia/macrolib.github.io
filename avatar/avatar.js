function generateRandomNumber(N) {
	return Math.floor(Math.random() * N) + 1;
}

function padNumber(num, length) {
	return String(num).padStart(length, '0');
}		

function autoExecute() {
	var rnum = generateRandomNumber(2);
	var rstr = padNumber(rnum, 3);
	var path = "url('avatar/"+rstr+".png')"
	var body = document.getElementsByTagName("body")[0];
	document.body.style.backgroundImage = path;
	document.body.style.backgroundPosition = "right center";
	document.body.style.backgroundSize = "auto 25vh";
}
window.onload = autoExecute;