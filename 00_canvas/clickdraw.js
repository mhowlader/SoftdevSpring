// Mohtasim Howlader
// SoftDev2 pd8
// K00 -- I See a Red Door...
// 2019-01-31

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clearBtn = document.getElementById("clearBtn");
var drawBtn = document.getElementById("drawBtn");

clearBtn.addEventListener("click" , function(){
    ctx.fillStyle = "white" ;
    ctx.fillRect(0 , 0 , c.width , c.height );
}
);

drawBtn.addEventListener("click" , function(){
    var curDraw = document.getElementById("drawBtn")
    if(curDraw.innerHTML === "box"){
        curDraw.innerHTML = "dot";
    }
    else{
        curDraw.innerHTML = "box";
    }
}
);


c.addEventListener("click", function(e){
    ctx.fillStyle = "#000000";
    if(document.getElementById("drawBtn").innerHTML === "box"){
        ctx.fillRect(e.clientX,e.clientY,30,30);
    }
    else{
        ctx.beginPath();
        ctx.ellipse(e.clientX,e.clientY, 15, 15,0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}
);
