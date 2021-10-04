
function scroll(){
	var header = document.getElementById("header");
	var text = document.getElementById("headerText");
	var img = document.getElementById("img");
	header.style.transition = "0.5s all ease";
	text.style.transition = "0.5s color ease";

	if (window.pageYOffset>= 50) {
		header.style.backgroundColor = "rgba(255,255,255,.8)";
		header.style.height = "75px";
		img.style.opacity="0.8"
		header.style.zIndex = 5;
		img.style.backgroundImage="url(cvtlogo12.png)";
		header.style.textShadow = "2px 2px 8px rgba(255,255,255,1)";
		header.style.boxShadow = "10px 10px 5px rgba(0,0,0,.25)";
		text.style.color="rgb(0,0,0)";
	}
	else {
		header.style.backgroundColor = "rgba(255,255,255,1)";
		header.style.height = "90px";
		img.style.backgroundImage="url(cvtlogo1.png)";
		img.style.transition="0.5s all ease";
		img.style.opacity="1"
		header.style.textShadow = "2px 2px 8px rgba(0,0,0,0)";
		header.style.boxShadow = "10px 10px 5px rgba(0,0,0,0)";
		text.style.color="rgb(0,0,0)";

	}
}
function toggle1() {
   var element = document.getElementsByTagName("li");
   element[0].classList.toggle("colageimg1big");
}
function toggle2() {
   var element = document.getElementsByTagName("li");
   element[1].classList.toggle("colageimg2big");
}

function toggle3() {
   var element = document.getElementsByTagName("li");
   element[2].classList.toggle("colageimg3big");
}

function toggle4() {
   var element = document.getElementsByTagName("li");
   element[3].classList.toggle("colageimg4big");
}

function toggle5() {
   var element = document.getElementsByTagName("li");
   element[4].classList.toggle("colageimg5big");
}

function toggle6() {
   var element = document.getElementsByTagName("li");
   element[5].classList.toggle("colageimg6big");
}
