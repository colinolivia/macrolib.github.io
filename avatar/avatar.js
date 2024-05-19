function generateRandomNumber(N) {
	return Math.floor(Math.random() * N) + 1;
}

function padNumber(num, length) {
	return String(num).padStart(length, '0');
}
var rnum = generateRandomNumber(1);
var rstr = padNumber(rnum, 3);		
var pathA = "https://www.macrolib.com/avatar/A"+rstr+".png"
var pathB = "https://www.macrolib.com/avatar/B"+rstr+".png";

function autoExecute() {
	var body = document.getElementById("aimg");
	body.src = pathA;
}
window.onload = autoExecute;

var box = document.getElementById("aimg");
box.addEventListener("click", function() {
    if(this.src===pathA){
		this.src = pathB;
		this.style.height = "40vh";
	}else{
		this.style.height = "10vh";
		this.src = pathA;
	};
});
