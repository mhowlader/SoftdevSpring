// Mohtasim Howlader and Maryann Foley
// SoftDev2 pd8
// K15: Scattered
// 2019-03-25




var data = [ [73.847017017515,241.893563180437],
[68.7819040458903,162.310472521300],
[74.1101053917849,212.74],
[71.7309784033377,220.042470303077],
[69.8817958611153,206.349800623871],
[67.2530156878065,152.212155757083],
[68.7850812516616,183.927888604031],
[68.3485155115879,167.971110489509],
[67.018949662883,175.92944039571],
[63.4564939783664,156.399676387112],
[71.1953822829745,186.604925560358],
[71.6408051192206,213.741169489411],
[64.7663291334055,167.127461073476],
[69.2830700967204,189.446181386738],
[69.2437322298112,186.434168021239],
[67.6456197004212,172.186930058117],
[72.4183166259878,196.028506330482],
[63.974325721061,172.883470208780],
[69.6400598997523,185.983957573130] ];


var margin = {top: 30, right: 15, bottom: 60, left: 60}
    , width = 960 - margin.left - margin.right
    , height = 700 - margin.top - margin.bottom;

var x = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return d[0]; })])
                .range([ 0, width ]);

var y = d3.scaleLinear()
    	          .domain([0, d3.max(data, function(d) { return d[1]; })])
    	          .range([ height, 0 ]);

var chart = d3.select('.chart')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom);

var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height);



var xAxis = d3.axisBottom(x)

main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.call(xAxis);

main.append("text")
    .attr("transform",
          "translate(" + (width/2) + " ," +
                         (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("Height (cm)")


var yAxis = d3.axisLeft(y)


main.append('g')
	.attr('transform', 'translate(0,0)')
	.call(yAxis);



main.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Weight (Kg)");


// title
main.append("text")
      .attr("transform",
            "translate(" + (width/2) + " ," +
                      (margin.top - 30) + ")")
      .style("text-anchor", "middle")
      .text("Height vs Weight");



var group = main.append("svg:g");

group.selectAll("circles")
    .data(data)
    .enter().append("svg:circle")
    .attr("cx", function (d,i) { return x(d[0]); } )
    .attr("cy", function (d) { return y(d[1]); } )
    .attr("r", 3);
