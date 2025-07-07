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

function copyemail(e) {
  var e = e || window.event;
  e.preventDefault();
  e.stopPropagation();
  navigator.clipboard.writeText('mercier.pas@gmail.com');
  var tooltip = document.querySelector("#page-footer .tooltip");
  tooltip.classList.toggle("hidden");
  setTimeout(() => {
    tooltip.classList.toggle("hidden");
  }, 3000);
}
