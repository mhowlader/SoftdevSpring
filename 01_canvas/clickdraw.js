//Addison Huang & Mohtasim Howlader -- team gist do it
//SoftDev 2 pd8
//K01 -- and I want to paint it better
//2019-02-01

//variables
var state="box" //default state of draw is box

var c = document.getElementById("slate"); //canvas
var ctx = c.getContext("2d"); //2dcanvas
var toggle = document.getElementById("toggle"); //toggle button
var clear = document.getElementById("clear"); //clear button
//end variables

//eventlisteners
c.addEventListener("click", draw); //draw circles/boxes when canvas is clicked at mouse location
toggle.addEventListener("click", tog); //toggle between circles/boxes
clear.addEventListener("click", clean); //clear the canvas
//end eventlisteners

//functions
//draw function
function draw(e) {
    e.preventDefault();
    x=e.offsetX; //offset for canvas
    y=e.offsetY; //offset for canvas
    if (state == "box") {
        ctx.fillRect(x,y,20,20);
        console.log("box drawn at x: " + x + " y: " + y);
        //draws a box of 20x20 at mouse location
    }
    else {
        ctx.beginPath();
        ctx.ellipse(x, y, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        console.log("dot drawn at x: " + x + " y: " + y);
        //draws a dot of radius 10 at mouse location
    }
};

//clean function
function clean() {
    ctx.clearRect(0,0,600,600);
    //cleans the canvas
};

//tog function
function tog() {
    if (state == "box") {
        state = "dot"; //toggles to dot
    }
    else {
        state="box"; //toggles to box
    }
    console.log("You are now in " + state + " state"); //logs the state to the console
};


/*
offsetX - offset of the X coordinate of the mouse  between the event and the left padding
offsetY - offset of the Y coordinate of the mouse between the event and the top padding
beginPath() - resets the current path and creates a new one
preventDefault() - cancels the event
*/
