function generateRandomNumber(N) {
	return Math.floor(Math.random() * N) + 1;
}

function padNumber(num, length) {
	return String(num).padStart(length, '0');
}

var rnum = generateRandomNumber(2);
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
		this.style.height = "50vh";
	}else{
		this.style.height = "10vh";
		this.src = pathA;
	};
});

var L1 = document.createElement('link');
L1.rel = 'preload';
L1.href = pathA
L1.as = 'image';
document.head.appendChild(L1);
var L2 = document.createElement('link');
L2.rel = 'preload';
L2.href = pathB
L2.as = 'image';
document.head.appendChild(L2);