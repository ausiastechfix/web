function remember(theme)
{    
    let themee
    theme = themee
    console.log(themee)
    mode = localStorage.getItem('cmode')

    if (mode == 7) {
        console.log("light sw from remember")
        var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'light.js';
    head.appendChild(script);
   // document.getElementById("themebutton").onclick = function(){
    lighttoggle()

}
    if (mode == 6) {
    console.log("dark sw from remember")
         var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'dark.js';
    head.appendChild(script);
//    document.getElementById("themebutton").onclick = function(){
    darktoggle(1)

    }
}