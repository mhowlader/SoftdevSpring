/*
Mohtasim Howlader
SoftDev2 pd8
K #10: Ask Circles [Change || Die]
2019-03-14
*/

var mainPic = document.getElementById("vimage");
var clear = document.getElementById("clear");

var oldX = NaN;
var oldY = NaN;


mainPic.addEventListener("click", function(e){
  xcord = e.offsetX;
  ycord = e.offsetY;

  circle(xcord, ycord);
  oldX = xcord;
  oldY = ycord;
});

clear.addEventListener("click", function(){
  clear();
});

var circle = function(x , y){
  var c = document.createElementNS( "http://www.w3.org/2000/svg" , "circle")
  c.setAttribute("cx" , x);
  c.setAttribute("cy" , y);
  c.setAttribute("r" , "10");
  c.setAttribute("fill" , "red");
  c.setAttribute("stroke" , "black");
  c.addEventListener("click", animate);
  c.addEventListener("click", function(e){
    e.stopPropagation();
  });
  mainPic.appendChild(c);
}

var animate = function(){
  if (this.getAttribute('fill') === "red"){
    this.setAttribute("fill", "pink");
  }
  else if (this.getAttribute('fill') === "pink"){
    var newChild = circle(Math.random() * 500, Math.random() * 500);
    this.remove();
  }
}


var clear = function(){
  while(mainPic.firstChild){
    mainPic.removeChild(mainPic.firstChild)
  }
  oldX = NaN;
  oldY = NaN;
}
