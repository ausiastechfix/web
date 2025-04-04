function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
    document.getElementById("themebutton").onclick = function(){
    lighttoggle()
    }
}
let mode
function darktoggle(mode){
	togglemode = mode;
	//console.log("0 es claro, 1 es oscuro")
	var dark = 0
	//console.log(dark)
	//console.log(localStorage.getItem('2'))
	if(togglemode == "1") {
	if(dark == 0) {
	
	dark = "1"

			var savemode = {
		  cmode: 6,		  
		};
		localStorage.setItem("cmode", savemode.cmode);
	//	alert(localStorage.getItem('cmode'));

		dark = localStorage.getItem('cmode')

	console.log(dark, dark)
	var shiftcolor = document.getElementById('toggleable')  
	var shiftcolor2 = document.getElementById('toggleable2')
	var shiftcolor3 = document.getElementById('toggleable3') 
	var shiftcolor4 = document.getElementById('toggleable4')  
	var shiftcolor5 = document.getElementById('toggleable5')
	var shiftcolor6 = document.getElementById('toggleable6')
	var shiftcolor7 = document.getElementById('toggleable7')
	var shiftcolor8 = document.getElementById('toggleable8')
	var shiftcolor9 = document.getElementById('toggleable9')
	var shiftcolor10 = document.getElementById('toggleable10')
	var shiftcolor11 = document.getElementById('toggleable11')
	var shiftcolor12 = document.getElementById('toggleable12')

    shiftcolor.classList = "darkmode"
    shiftcolor.style = ""
    console.log("Pheaderbackgr set to dark")

    shiftcolor2.classList = "darkmode2"

    shiftcolor3.classList = "darkmode3"

    shiftcolor4.src = "ANTONATF.png"
    shiftcolor4.classList = "darkmode4"

  
    shiftcolor5.classList = "darkmode5"

	shiftcolor6.src = "menuD.png"

  	shiftcolor7.classList = "darkmode7"

  	shiftcolor12.classList = "buttonD"
  	//shiftcolor8.src("homettextL2.png")
  	//shiftcolor8.src("homettextD2.png")
  	//document.getElementById("toggleable8").src="hometextD2.png";
	//shiftcolor8.src = "homettextD2.png"
	//shiftcolor9.src = "questtextD2.png"
	//shiftcolor10.src = "conttextD2.png" 	

  	// Renders as null and breaks everything???
  	//if ( shiftcolor6.src != null ) {
	//shiftcolor8.classList = "aa"
	//shiftcolor6.src.remove(hometL.png)
	//shiftcolor6.src.add(hometD.png)
	//else
	//	console.log("Failed, rendered as null")
	//}

	//shiftcolor9.classList = "aa"
	//shiftcolor6.src = "questtD.png"

	//shiftcolor10.classList = "aa"
	//shiftcolor6.src = "conttD.png"
  	

//localStorage.setItem('2');
}
}
else if (togglemode == "0") {
	console.log("Already active")
}
}
// GO BACK TO LIGHT MODE 

//  	if var dark == 1 {

 //		var dark == 0
//  	}
//}
  