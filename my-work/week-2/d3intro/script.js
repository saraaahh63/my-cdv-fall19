let viz = d3.select("#viz-container")
        .append("svg")
            .attr("id","viz")
            .attr("width","800")
            .attr("height", "500")
;

function averageData(data){
    let newData = [];
    let keys = Object.keys(data[data.length-1]);
    for(let i = 0; i < keys.length; i++){
      let key = keys[i];
      let sum = 0;
      let num = 0;
      for(let j = 0; j < data.length; j++){
        let datum = data[j];
        if(key in datum){
          sum += datum[key];
          num++;
        }
      }
      let avg = sum/num;
      if(!isNaN(avg)){
        let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
        newData.push(newDataPoint);
      }
    }
    return newData;
  }


function gotData(newdata){
    data = averageData(newdata);
    viz.selectAll("circle").data(data).enter().append("circle")
            .attr("fill", "white")
            .attr("stroke","black")
            .attr("cx", () => Math.random() * 450)
            .attr("cy", 450)
            .attr("r", 20)
    ;
  }

d3.json("data.json").then(gotData);
