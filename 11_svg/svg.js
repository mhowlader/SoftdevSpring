/*
Mohtasim Howlader
SoftDev2 pd8
K11: Ask Circles [Change || Die] …While On The Go
2019-03-18
*/

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var movebut = document.getElementById("move")
var randbut = document.getElementById('rand');
var requestID;


pic.addEventListener("click", function(e){
    xcor = e.offsetX;
    ycor = e.offsetY;
    circle(xcor, ycor);
});

clear.addEventListener("click", function(){
    clear();
});

var circle = function(x , y){
    var c = document.createElementNS( "http://www.w3.org/2000/svg" , "circle");

    c.setAttribute("cx" , x);
    c.setAttribute("cy" , y);
    c.setAttribute("r" , "20");
    c.setAttribute("x-vel" , "3")
    c.setAttribute("y-vel" , "3")
    c.setAttribute("fill" , "green");
    c.setAttribute("stroke" , "black");
    c.setAttribute("turn", "0");
    c.setAttribute("count", "1");
    c.addEventListener("click", colorChange);
    c.addEventListener("click", function(e){
        e.stopPropagation();
    });
    pic.appendChild(c);
}

var colorChange = function(){
    if (this.getAttribute('fill') === "green"){
        this.setAttribute("fill", "blue");
    }
    else if (this.getAttribute('fill') === "blue"){
        var newChild = circle(Math.random() * 500, Math.random() * 500);
        this.remove();
    }
}

var animation = function() {
    window.cancelAnimationFrame(requestID);
    childnodes=pic.children
    var move = function(child){
        velx = parseInt(child.getAttribute("x-vel"));
        vely = parseInt(child.getAttribute("y-vel"));
        xcor = parseInt(child.getAttribute("cx"));
        ycor = parseInt(child.getAttribute("cy"));
        radius = parseInt(child.getAttribute("r"));
        height = parseInt(pic.getAttribute("height"));
        width = parseInt(pic.getAttribute("width"));
        if(xcor + radius + velx > width || xcor - radius + velx < 0){
            child.setAttribute("x-vel", -velx);
        }
        if(ycor + radius +vely > height || ycor - radius + vely < 0){
            child.setAttribute("y-vel", -vely);
        }
        child.setAttribute("cx", xcor + velx);
        child.setAttribute("cy", ycor + vely);
    }
    for(var i=0;i<pic.childElementCount;i++){
        move(pic.children[i]);
    }
    requestID = window.requestAnimationFrame(animation);
}

var moveRand = function() {
    window.cancelAnimationFrame(requestID);
    childnodes=pic.children
    var orb = function(child){
        velx = parseInt(child.getAttribute("x-vel"));
        vely = parseInt(child.getAttribute("y-vel"));
        xcor = parseInt(child.getAttribute("cx"));
        ycor = parseInt(child.getAttribute("cy"));
        radius = parseInt(child.getAttribute("r"));
        height = parseInt(pic.getAttribute("height"));
        width = parseInt(pic.getAttribute("width"));
        turn = parseInt(child.getAttribute("turn"));
        count = parseInt(child.getAttribute("count"));

        child.setAttribute("x-vel", -velx);
        child.setAttribute("y-vel", -vely);
        child.setAttribute("cx", xcor + velx);
        child.setAttribute("cy", ycor + vely);
        
    }
    for(var i=0;i<pic.childElementCount;i++){
        orb(pic.children[i]);
    }
    requestID = window.requestAnimationFrame(moveRand);
}



var clear = function(){
    while(pic.firstChild){
        pic.removeChild(pic.firstChild)
    }
}

movebut.addEventListener("click", animation);
randbut.addEventListener("click", moveRand);
