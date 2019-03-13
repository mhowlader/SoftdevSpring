/*
Mohtasim Howlader
SoftDev2 pd8
K #09: Connect the Dots
2019-03-13
*/

var mainPic = document.getElementById("vimage");
var clear = document.getElementById("clear");

var oldX = NaN;
var oldY = NaN;



mainPic.addEventListener("click", function(e){
  xcord = e.offsetX;
  ycord = e.offsetY;
  if(!isNaN(oldX)){
    line(xcord,ycord);
    circle(oldX, oldY);
  }
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
  mainPic.appendChild(c);
}

var line = function(x , y){
  var j = document.createElementNS( "http://www.w3.org/2000/svg" , "line");
  j.setAttribute('x1',oldX);
  j.setAttribute('y1',oldY);
  j.setAttribute('x2',x);
  j.setAttribute('y2',y);
  j.setAttribute("stroke", "black")
  mainPic.appendChild(j);
}

var clear = function(){
  while(mainPic.firstChild){
    mainPic.removeChild(mainPic.firstChild)
  }
  oldX = NaN;
  oldY = NaN;
}
