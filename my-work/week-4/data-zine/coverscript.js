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