var tianaX = 250;
var tianaY = 250;

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


document.addEventListener("keydown", function(e) {
 if(e.keyCode == 40){
   tianaY +=15;
document.getElementById("tiana").setAttribute("y", tianaY)

 }
 else if(e.keyCode == 38){
       tianaY -=15;
document.getElementById("tiana").setAttribute("y", tianaY)
 }
})
