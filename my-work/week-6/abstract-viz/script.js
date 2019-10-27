let w = 1200;
let h = 800;

// for convenience
let datafile = "data.json";

// function to retrieve only the data points
// belonging to one step in time:
function getStep(data, step){
  return data.filter(function(datapoint){
    if(datapoint.step == step){
      return true;
    }else{
      return false;
    }
  });
}

// creating the svg that holds everything else
// we do this outside the gotData function to
// keeps things clean
let viz = d3.select("#container")
  .append('svg')
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "darkcyan")
;

function gotData(incomingData){
  // checking out our data
  console.log(incomingData);
  // testing the filter function defined above
  console.log(getStep(incomingData, 0));

  let xDomain = d3.extent(incomingData, function(datapoint){
    return datapoint.x;
  });
  console.log(xDomain);
  
  let yDomain = d3.extent(incomingData, function(datapoint){
    return datapoint.y;
  })
  console.log(yDomain);

  // general padding of our visualization
let padding = 40;
// scale to map from min and max of our x values to the
// boundaries (minus padding) of our svg:
let xScale = d3.scaleLinear().domain(xDomain).range([padding, w-padding]);

// create axis for this scale
let xAxis = d3.axisBottom(xScale);
// create a groyp to gold the axis elements
let xAxisGroup = viz.append("g").attr("class", "xaxis");
// tell d3 to fill the group with the axis elements
xAxisGroup.call(xAxis);
// position the axis at the bottom of the svg
xAxisGroup.attr("transform", "translate(0, "+ (h-padding) +")");

// note how we flip the orientation (in the range) of our y scale
// to make sure that low y values are at the bottom of the graph
let yScale = d3.scaleLinear().domain(yDomain).range([h-padding, padding]);
let yAxis = d3.axisLeft(yScale);
let yAxisGroup = viz.append("g").attr("class", "yaxis");
yAxisGroup.call(yAxis);
yAxisGroup.attr("transform", "translate("+padding+",0)");

let vizgroup = viz.append("g").attr("class", "vizgroup");

let step = 0;

function drawViz(){
  console.log("running");
  let data = getStep(incomingData, step);
  // d3.shuffle(data);
  console.log("data:");
  console.log(data);

  let datagroups = vizgroup.selectAll(".datagroup").data(data, function(d){
    // we return the value that should act as the datapoints key
    return d.name;
  });
  
  let incomingDataGroups = datagroups.enter()
    .append("g")
    .attr("class", "datagroup")
  ;

  incomingDataGroups.append("circle")
      .attr("r", 5)
      .attr("fill", "white")
  ;

  incomingDataGroups.append("text")
    .text(function(d,i){
      return d.name;
    })
    .attr("x",10)
    .attr("y",5)
    .attr("fill","white")
    .attr("font-family","sans-serif")
  ;

  incomingDataGroups.attr("transform", function(d, i){
    return "translate("+ xScale(d.x) + ", " + yScale(d.y) + ")"
  });

  // here we deal with the elements that need to be UPDATED
  datagroups.transition().attr("transform", function(d, i){
    return "translate("+ xScale(d.x) + ", " + yScale(d.y) + ")"
  });

}

drawViz();
setInterval(function(){
  step += 20;
  drawViz();
}, 300);

}

d3.json(datafile).then(gotData);
