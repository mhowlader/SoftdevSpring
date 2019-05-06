// Mohtasim Howlader
// Softdev2 pd8
// K21 --  Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
// 2019-04-29

function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};

var data =JSON.parse(readJSON("data.json"));
var white = data.reduce(function(a,b) {
    if(b.white_num=="0"){
	return a
    }
    return a + b.white_num
},0)

var senior = data.filter(function(n) {
    return n.grade12 >0})

var female = data.filter(function(n) {
    return n.female_per > n.fefemale_per})

var whiteNum = document.getElementById("white")
whiteNum.innerHTML = white
var numSenior = document.getElementById("senior")
numSenior.innerHTML = senior.length
var numfemale = document.getElementById("female")
numfemale.innerHTML = female.length
