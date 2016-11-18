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

var tianaY= 87;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   tianaY -=15;
document.getElementById("tiana").setAttribute("y", tianaY)

 }
 else if(e.keyCode == 39){
       tianaY +=15;
document.getElementById("tiana").setAttribute("y", tianaY)
 }
})
