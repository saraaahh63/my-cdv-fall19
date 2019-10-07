let w = 2400;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lightyellow")
;

let xpadding = 10;
let xScale = d3.scaleLinear().domain([0,100]).range([xpadding,2400-xpadding]);

function xPosition(d, i){
  return xScale(i);
}

function yPosition(d, i){
  return h/2;
}

function getGroupTranslation(d, i){
  return "translate(" + xPosition(d,i) + "," + yPosition(d,i) + ")";
}

function getName(d, i){
  return d.name + " - " + d.height
}

let padding = 20;

let yScale = d3.scaleLinear().domain([0, 828]).range([padding, h/2-(padding*2)]);

function getSize(d,i){
  return yScale(d.height);
}

function getNegativeSize(d,i){
  return (yScale(d.height) * -1) - padding;
}

let colorScale = d3.scaleLinear().domain([300, 400, 828]).range(["white","lightblue","blue"]);

function getColor(d,i){
  return colorScale(d.height);
}

// function filterFunction(d,i){
//   return d.height > 400;
// }

// .filter(filterFunction)

function gotData(incomingData){
  console.log(incomingData);

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .classed("datagroup", true)
  ;

  let towers = datagroups.append("rect")
      .attr("x", 0)
      .attr("y", getNegativeSize)
      .attr("width", 20)
      .attr("height", getSize)
      .attr("fill", getColor)
  ;

  let labels = datagroups.append("text")
      .text(getName)
      .attr("transform", "rotate(90)")
      .attr("fill",getColor)
  ;

  datagroups.attr("transform", getGroupTranslation);

}

d3.json("buildings.json").then(gotData);
