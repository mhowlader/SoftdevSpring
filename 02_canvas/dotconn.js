//Addison Huang & Mohtasim Howlader -- team gist do it
//SoftDev 2 pd8
//K02 -- Connecting the dots
//2019-02-04

//variables
var c = document.getElementById("playground"); //canvas
var ctx = c.getContext("2d"); //2dcanvas
var clear = document.getElementById("clear"); //clear button
var drawn = false;
var lastX, lastY = 0;
var first = true;
//end variables

//eventlisteners
c.addEventListener("click", draw); //draw circles/boxes when canvas is clicked at mouse location
clear.addEventListener("click", clean); //clear the canvas
//end eventlisteners

//functions
//draw function
function draw(e) {
    var x=e.offsetX; //offset for canvas
    var y=e.offsetY; //offset for canvas
    if (first) {
	ctx.beginPath();
	lastX = x;
	lastY = y;
	first = false;
    }
    ctx.fillStyle = "red"
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(x, y, 10, 10, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    drawn=true;
    console.log("dot drawn at x: " + x + " y: " + y);
    console.log("path drawn at x: " + x + " y: " + y);
    //draws a dot of radius 10 at mouse location
    if(!first) {
	lastX = x;
	lastY = y;
    }

};

//clean function
function clean(e) {
    if (drawn){
	ctx.beginPath();
	ctx.clearRect(0,0,600,600);
	first=true;
	//cleans the canvas
    }
    else {
	e.preventDefault();
    }
};
