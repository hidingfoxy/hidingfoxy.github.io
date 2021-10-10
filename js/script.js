function tab(idnum) {
	console.log(idnum)
	tabscontent = document.getElementsByClassName("onetab");
	console.log(tabscontent)
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

var page1 = document.getElementById("main-block");
function scrollto1() {
	page1.scrollIntoView({behavior: "smooth"});
}
