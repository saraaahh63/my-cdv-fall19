let data = [1];

let descrip1 = "The Y-axis measures the number of times each phrase was used";
let descrip2 = "The lowest value was 1 and the highest value was 8";
let descrip3 = "The radius of each circle also depicts this value";

let w = 1200;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width",w)
    .attr("height",h)
    .style("background-color","black")
;

let group = viz.selectAll("g").data(data).enter().append("g");

let text = group.append("text")
    .text(descrip1)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text1 = group.append("text")
    .text(descrip2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text2 = group.append("text")
    .text(descrip3)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

text.attr("transform", "translate(600,150)");

text1.attr("transform", "translate(600,200)");

text2.attr("transform", "translate(600,250)");

let circleColorScale = d3.scaleSequential(d3.interpolateCool).domain([10,200]);

function getCircleColor(d,i){
    return circleColorScale(d.num);
}

let xScale = d3.scaleLinear().domain([0,20]).range([150,1100]);

function xPos(d,i){
    return xScale(i);
}

let yScale = d3.scaleLinear().domain([0,200]).range([100,800]);

function yPos(d,i){
    return 450;
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