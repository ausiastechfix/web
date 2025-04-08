function lighttoggle() {
	console.log("--lighttoggle start--")
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
	var shiftcolor10 = document.getElementById('SWimg')
	var shiftcolor11 = document.getElementById('modeSW')
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
  	
	
  	shiftcolor10.src = "tolight.gif"
  		console.log("mode switch set to light")

  	shiftcolor12.classList = "buttonL"

  		function sleep(ms) {
 	 return new Promise(resolve => setTimeout(resolve, ms));
	}

	
	sleep(0).then(() => { shiftcolor11.classList = "f10" ; });
	sleep(40).then(() => { shiftcolor11.classList = "f9" ; });
  	sleep(80).then(() => { shiftcolor11.classList = "f8" ; });
  	sleep(120).then(() => { shiftcolor11.classList = "f7" ; });
  	sleep(160).then(() => { shiftcolor11.classList = "f6" ; });
  	sleep(200).then(() => { shiftcolor11.classList = "f5" ; });
  	sleep(240).then(() => { shiftcolor11.classList = "f4" ; });
  	sleep(280).then(() => { shiftcolor11.classList = "f3" ; });
  	sleep(320).then(() => { shiftcolor11.classList = "f2" ; });
  	sleep(360).then(() => { shiftcolor11.classList = "f1" ; });
  	
  	  	
  	
  	
  	console.log("mode switch backgr set to light")


	//localStorage.setItem.('0');
	
}
}