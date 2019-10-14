let data = [1];

let descrip = "I measured every time I said or thought of a word or phrase in a language ";
let descripcont = "other than the primary language I was using."
let descrip1 = "The Y-axis measures the number of times each phrase was used";
let descrip1cont = "The lower down on the page, the more frequent";
let descrip2 = "The lowest value was 1 and the highest value was 8";
let descrip3 = "The radius of each circle also depicts this value";
let descrip4 = "The bigger the circle, the more frequently used";
let descrip5 = "The color gradient depicts the context of each phrase; Purple is the least";
let descrip6 = "appropriate (e.g.; school/classes), The lighter the color gets, the more";
let descrip7 = "appropriate the use of the phrase is (e.g.; among friends and family),";
let descrip8 = " Yellow means the phrase was used in multiple contexts";

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

let text5 = group.append("text")
    .text(descrip1cont)
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

let text6 = group.append("text")
    .text(descrip4)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text3 = group.append("text")
    .text(descrip)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text4 = group.append("text")
    .text(descripcont)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text7 = group.append("text")
    .text(descrip5)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text8 = group.append("text")
    .text(descrip6)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text9 = group.append("text")
    .text(descrip7)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

let text10 = group.append("text")
    .text(descrip8)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill","white")
    .style("font-size", "30px")
;

text.attr("transform", "translate(600,160)");
text5.attr("transform", "translate(600,200)");
text1.attr("transform", "translate(600,240)");
text2.attr("transform", "translate(600,280)");
text6.attr("transform", "translate(600,320)");

text3.attr("transform", "translate(600, 80)");
text4.attr("transform", "translate(600,120)");

text7.attr("transform", "translate(600,620)");
text8.attr("transform", "translate(600,660)");
text9.attr("transform", "translate(600,700)");
text10.attr("transform", "translate(600,740)");

let circleColorScale = d3.scaleSequential(d3.interpolateCool).domain([0,20]);

function getCircleColor(d,i){
    return circleColorScale(d.num);
}

let xScale = d3.scaleLinear().domain([0,20]).range([150,1100]);

function xPos(d,i){
    return xScale(i);
}

let yScale = d3.scaleLinear().domain([0,200]).range([100,800]);

function yPos(d,i){
    return 460;
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