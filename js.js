
 function toggleMenu() {
  var menuBox = document.getElementById('menu-box');  

  if(menuBox.style.display == "table-row") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";

  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "table-row";
  }
}