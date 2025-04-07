//function loadScript(url)
//{    
//    var head = document.getElementsByTagName('head')[0];
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.src = url;
//    head.appendChild(script);
//    document.getElementById("themebutton").onclick = function(){
//    lighttoggle()
//    }
//}
let mode
function darktoggle(mode){
	console.log("--darktoggle start--")
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

	console.log(dark)
	var shiftcolor = document.getElementById('toggleable')  
	var shiftcolor2 = document.getElementById('toggleable2')
	var shiftcolor3 = document.getElementById('toggleable3') 
	var shiftcolor4 = document.getElementById('toggleable4')  
	var shiftcolor5 = document.getElementById('toggleable5')
	var shiftcolor6 = document.getElementById('toggleable6')
	var shiftcolor7 = document.getElementById('toggleable7')
	var shiftcolor8 = document.getElementById('toggleable8')
	var shiftcolor9 = document.getElementById('toggleable9')
	var shiftcolor10 = document.getElementById('SWimg')
	var shiftcolor11 = document.getElementById('modeSW')
	var shiftcolor12 = document.getElementById('toggleable12')

    shiftcolor.classList = "darkmode"
    shiftcolor.style = ""
   		console.log("Pheaderbackgr set to dark")

    shiftcolor2.classList = "darkmode2"
    	console.log("Pheader Prop. set to dark")

    shiftcolor3.classList = "darkmode3"
    	console.log("pheaderbackgr set to dark")

    shiftcolor4.src = "ANTONATF.png"
    shiftcolor4.classList = "darkmode4"
    	console.log("pheaderlogo set to dark")

    shiftcolor5.classList = "darkmode5"
    	console.log("menuholder set to dark")

	shiftcolor6.src = "menuD.png"
		console.log("menulogo set to dark")

  	shiftcolor7.classList = "darkmode7"
  		console.log("paragraphs set to dark")

  	shiftcolor10.src = "darksw.png"
  		console.log("mode switch set to dark")

  	shiftcolor12.classList = "buttonD"
  		console.log("All menu items set to dark")

  	shiftcolor11.classList = "darkB"
  		console.log("mode switch backgr set to dark")
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
  