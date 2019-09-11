let viz = d3.select("#viz-container")
        .append("svg")
            .attr("id","viz")
            .attr("width","800")
            .attr("height", "800")
;


viz.attr("height","500");

// let myCircle = viz.append("circle")
//         .attr("cx","200")
//         .attr("cy","100")
//         .attr("r","50")
// ;

// myCircle.attr("fill","white");

// let myRect = viz.append("rect")
//         .attr("x","400")
//         .attr("y","200")
//         .attr("width","300")
//         .attr("height","100")
// ;

let myData = [3,6,8,1,5];

viz.selectAll("circle").data(myData).enter().append("circle")
            .attr("cx","120")
            .attr("cy","100")
            .attr("r","20")
;