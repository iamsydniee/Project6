var tianaX = 250;
var tianaY = 250;
var player = tiana;

var foodCount;
var minusHealth;

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

//////////OverLap//////
document.addEventListener("keydown" ,function (e) {
  var tiana = document.getElementById.attribute("tiana")
  var food = document.getElementById.attribute("food")

tianaX = Number(tiana.getAttribute("x"))
tianaY = Number(tiana.getAttribute("y"))

foodx = Number(food.getAttribute("x"))
foody = Number(food.getAttribute("y"))

  if (tianax  > foodx && tianax < foodx + width)
  {

    food.setAttribute("begin", "food.end")

  }
})
