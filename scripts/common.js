function togglemenu() {
	var x = document.getElementById("nav");
	if (x.className === "nav") {
		x.className += " nav--open";
	} else {
		x.className = "nav";
	}
	var element = document.getElementById("menu-toggle");
	element.classList.toggle("menu-toggle--open");
}

//window.onload = function(){
//	setTimeout(function(){
//		document.getElementById("fadein").remove();
//	},1000);
//};