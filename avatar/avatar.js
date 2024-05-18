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
	var body = document.getElementById("aimg");
	body.src = path;
}
window.onload = autoExecute;