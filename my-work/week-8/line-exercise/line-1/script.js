// data we work with
let data = [
  {
    "laughs": 0,
    "mood": 0
  },
  {
    "laughs": 3,
    "mood": 6
  },
  {
    "laughs": 4,
    "mood": 3
  },
  {
    "laughs": 8,
    "mood": 9
  }
];


let w = 900;
let h = 500;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;

// function getX(d,i){
//   return d.laughs * 100
// }

// function getY(d,i){
//   return d.mood * 50
// }


// let datapoints = viz.selectAll("circle").data(data);
// let entering = datapoints.enter();

// entering.append("circle")
//   .attr("stroke","black")
//   .attr("cx", getX)
//   .attr("cy", getY)
//   .attr("r", 10)
// ;

let lineMaker = d3.line()
  .x(function(d,i){
    return d.laughs * 100
  })
  .y(function(d,i){
    return d.mood * 50
  })
;

let pathData = lineMaker(data);
console.log(pathData);

// viz.append("path").attr("d",pathData)
//   .attr("fill","none")
//   .attr("stroke","seagreen")
// ;

// datum is used to return the elements as one large data object
let pathDatapoint = viz.datum(data);

pathDatapoint.append("path")
  .attr("d",lineMaker)
  .attr("fill","none")
  .attr("stroke","seagreen")
;