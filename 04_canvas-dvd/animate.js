/*
Solo - Mohtasim Howlader
SoftDev2 pd8
K#04 -- What is it saving the screen from?
2019-02-07

*/
var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var radius = 0;
var growing = true;
var reqID = 0;

var clear = function(e){
    ctx.clearRect(0,0, canvas.width,canvas.height);
};

var draw = function(event){

    window.cancelAnimationFrame( reqID );
    clear();
    //draw the dot
    ctx.beginPath(); //begins path

    if(radius == 0){
        growing = true;
    }
    else if(radius == canvas.width/2 || radius == canvas.height/2){
        growing = false;
    }

    if(growing) {
        radius += 1;
    }
    else{
        radius -= 1;
    }

    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0 ,2 * Math.PI);

    ctx.stroke();
    ctx.fill();
    reqID = window.requestAnimationFrame(draw);
    console.log(reqID);
};

var setup = function(){

    window.cancelAnimationFrame( reqID );

    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor( Math.random() * (canvas.width - rectWidth) );
    var rectY = Math.floor( Math.random() * (canvas.height - rectWidth) );

    var xSpeed = 1;
    var ySpeed = 1;

    var dvdMove = function(){
        clear()

        var logo = new Image(rectWidth,rectHeight);
        logo.src = "logo_dvd.jpg";
        ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);

        if(rectX >= canvas.width - rectWidth + 10 || rectX <= -10){
            xSpeed *= -1;
        }
        rectX += xSpeed;

        if(rectY >= canvas.height - rectHeight + 10 || rectY <= -10){
            ySpeed *= -1;
        }
        rectY += ySpeed;

        reqID = window.requestAnimationFrame(dvdMove);
    };

    dvdMove();

};


var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var dvdButton = document.getElementById('dvd');

dotButton.addEventListener("click", function() {
    //radis starts at 0
    radius = 0;
    draw(); }
);
stopButton.addEventListener("click", function(){window.cancelAnimationFrame( reqID );});
dvdButton.addEventListener("click", setup);
