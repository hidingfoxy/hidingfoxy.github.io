function tab(idnum) {
	tabscontent = document.getElementsByClassName("onetab");
	for (i=0; i<tabscontent.length; i++) {
		if (idnum == i) {
			document.getElementById("Tab" + i.toString()).classList.add("tab-active")
			document.getElementById("Nav" + i.toString()).classList.add("current-link")
			document.getElementById("Nav" + i.toString()).classList.remove("notcurrent-link")
		} else {
			document.getElementById("Tab" + i.toString()).classList.remove("tab-active")
			document.getElementById("Nav" + i.toString()).classList.remove("current-link")
			document.getElementById("Nav" + i.toString()).classList.add("notcurrent-link")
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
var span1 = document.getElementsByClassName("close")[0];

function modalopen(img){
	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
}

if (span1 !== undefined && span1 !== null) {
	span1.onclick = function() {
		modal.style.display = "none";
	}
} 