function tab(idnum) {
	tabscontent = document.getElementsByClassName("onetab");
	for (i=0; i<tabscontent.length; i++) {
		if (idnum == i) {
			document.getElementById("Tab" + i.toString()).classList.add("tab-active")
			document.getElementById("Nav" + i.toString()).classList.add("current-link")
		} else {
			document.getElementById("Tab" + i.toString()).classList.remove("tab-active")
			document.getElementById("Nav" + i.toString()).classList.remove("current-link")
		}
		
	}
}


var moon = 0;
var tabslist = document.querySelectorAll('.onetab');

function NightMode() {
	if (moon === 0) {
		moon = 1;
		document.getElementById("body").setAttribute("class", "dark-mode");
		document.getElementById("moon").setAttribute("src", "images/darkmoon.png")
		for(var i = 0; i < tabslist.length; i++) {
			tabslist[i].classList.toggle("dark-card");
		  }
	} else {
		moon = 0;
		document.getElementById("body").setAttribute("class", "");
		document.getElementById("moon").setAttribute("src", "images/lightmoon.png")
		for(var i = 0; i < tabslist.length; i++) {
			tabslist[i].classList.toggle("dark-card");
		  }
	}
	
} 


function contopen(elem) {
	document.getElementById(elem.id+'w').style.display = "flex";
	elem.parentElement.parentElement.parentElement.parentElement.style.display = "none";
	document.body.scrollTop = 0;
}

function contclose(elem) {
	elem.parentElement.parentElement.parentElement.firstElementChild.style.display = "block";
	elem.parentElement.parentElement.style.display = "none";
	
}



var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalimg");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

function modalopen(img){
	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
}

span.onclick = function() {
	modal.style.display = "none";
} 