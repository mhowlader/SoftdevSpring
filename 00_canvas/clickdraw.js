// Mohtasim Howlader
// SoftDev2 pd8
// K00 -- I See a Red Door...
// 2019-01-31

var c = document.getElementById("slate"); //canvas
var ctx = c.getContext("2d"); //get 2d context
var clearBtn = document.getElementById("clearBtn"); //variable for clear button
var drawBtn = document.getElementById("drawBtn"); // variable for draw button

clearBtn.addEventListener("click" , function(){
    // ctx.fillStyle = "white" ;
    // ctx.fillRect(0 , 0 , c.width , c.height );

    ctx.clearRect(0,0,c.width, c.height); //clear the canvas
}
);

drawBtn.addEventListener("click" , function(){
    var curDraw = document.getElementById("drawBtn") // variable for the draw butotn
    if(curDraw.innerHTML === "box"){ // if button is
        curDraw.innerHTML = "dot";
    }
    else{
        curDraw.innerHTML = "box";
    }
}
);


c.addEventListener("click", function(e){
    e.preventDefault();
    var x=e.offsetX;
    var y=e.offsetY;
    if (x<0 || x>)
    ctx.fillStyle = "#000000";
    if(document.getElementById("drawBtn").innerHTML === "box"){
        ctx.fillRect(x,y,30,30);
    }
    else{
        ctx.beginPath();
        ctx.ellipse(x,y, 15, 15,0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}
);
