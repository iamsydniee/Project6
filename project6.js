var tianaX = 250;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   tianaX -=15;
document.getElementById("tiana").setAttribute("x", tianaX)

 }
 else if(e.keyCode == 39){
       tianaX +=15;
document.getElementById("tiana").setAttribute("x", tianaX)
 }
})
