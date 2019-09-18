// 1. find *real* data (array containing JS objects) in JSON format

// 2. load data (make it *console.loggable* (what a word!) in our script)

function datapoint(datapoint, i){
    console.log(i);
    return (i + 1) * 60;
}

function getWord(datapoint, i){

    console.log(datapoint.wordphrase);
}

function gotData(incomingData){

    console.log(incomingData);

    let viz = d3.select("#viz-container")
        .append("svg")
            .attr("width", 500)
            .attr("height", 500)
    ;

    viz.selectAll("circle").data(incomingData)
        .enter()
            .append("circle")
            .attr("cx", datapoint)
            .attr("cy", 200)
            .attr("r", 20)
    ;
}

d3.json("data.json").then(gotData);

// 3. concept: data and datapoint

// 4. make on circle for each datapoint (size and position doesn't matter)

// 5. concept: functions that "return"

// 6. use function to position circles randomly

// 7. realize "who" calls this function / why is there no `()`?

// 8. concept: "passing value into function"

// 9. let's assume: "D3 passes value into the data function"
// 10. if D3 passes a value, how can we receive it?
// 11. use *real* information to impact the x position
// 12. let's assume: "D3 passes another value!"
// 13. how can we receive that value?
// 14. in which ways is D3 making our live easy?