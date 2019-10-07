let data = [1];

let title = "Lost in Translation";
let byline = "Sarah Tahir";

let w = 1200;
let h = 800;

let colorScale = d3.scaleSequential(d3.interpolateCool).domain([1,250]);

function getColor(str){
    x = str.length * 10;
    return colorScale(x);
}

let viz = d3.select("#container")
  .append("svg")
    .attr("width",w)
    .attr("height",h)
    .style("background-color","black")
;

let group = viz.selectAll("g").data(data).enter().append("g");

let text = group.append("text")
    .text(title)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill",getColor(title))
    .style("font-size", "50px")
;

let text1 = group.append("text")
    .text(byline)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

text.attr("transform", "translate(600,350)");

text1.attr("transform", "translate(600,450)");

let circleColorScale = d3.scaleSequential(d3.interpolateCool).domain([10,200]);

function getCircleColor(d,i){
    return circleColorScale(d.num);
}

let xScale = d3.scaleLinear().domain([0,20]).range([100,1100]);

function xPos(d,i){
    return xScale(i);
}

let yScale = d3.scaleLinear().domain([0,200]).range([100,800]);

function yPos(d,i){
    return yScale(d.num);
}

function getGroupTranslation(d, i){
   return "translate(" + xPos(d,i) + "," + yPos(d,i) + ")";
  }

function gotData(incomingData){

    let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
        .classed("datagroup",true)
    ;

    let circles = datagroups.append("circle")
        .attr("cx",0)
        .attr("cy",0)
        .attr("r",100)
        .attr("stroke",getCircleColor)
        .attr("stroke-width",5)
        .attr("fill","none")
    ;

    datagroups.attr("transform", getGroupTranslation);
}

d3.json("cover.json").then(gotData);