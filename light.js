function lighttoggle() {
	console.log("0 es claro, 1 es oscuro ESTO ES LIGHT")
	var dark = 1
	//console.log(dark)
	if(dark == 1) {
	dark = "0"

		var savemode = {
		  cmode: 7,		  
		};
		localStorage.setItem("cmode", savemode.cmode);
	//	alert(localStorage.getItem('cmode'));

		dark = localStorage.getItem('cmode') 
	//console.log(dark)
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

   shiftcolor.style = "background-color: #c5dcf2";
   shiftcolor.classList = "lightmode"
  		 console.log("backgr set to light")


   shiftcolor2.classList = "pheaderitem"
   		console.log("Pheader Prop. set to light")

	shiftcolor3.classList = ""
	   console.log("pheaderbackgr set to light")

   shiftcolor4.src = "ANTONATFlight.png"
   shiftcolor4.classList = "logo"
	   console.log("pheaderlogo set to light")

   shiftcolor5.classList = "menuhold"
	   console.log("menuholder set to light")

	shiftcolor6.classList = "menuicon"
	shiftcolor6.src = "menuL.png"
	console.log("menulogo set to light")

	shiftcolor7.classList.remove("darkmode7")
	shiftcolor7.classList = "lightmode"
		console.log("paragraphs set to light")

 	
	//shiftcolor8.src = "homettextL2.png"
	//shiftcolor9.src = "questtextL2.png"
	//shiftcolor10.src = "conttextL2.png"
  	
		console.log("All menu items set to light")

  	shiftcolor12.classList = "buttonL"

	//localStorage.setItem.('0');
	
}
}