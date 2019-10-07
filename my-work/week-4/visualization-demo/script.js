function datapoint(datapoint, i){
    console.log(i);
    return (i + 1) * 60;
}

function gotData(incomingData){

    console.log(incomingData);

    let viz = d3.select("#viz-container")
        .append("svg")
            .attr("width", 500)
            .attr("height", 800)
    ;

    viz.selectAll("g").data(incomingData)
        .enter()
            .append("g")
                .append("path")
                    .attr("class","path")
                    .attr("stroke", "#FFFFFF")
                    .attr("stroke-width", 2)
                    .attr("opacity",1)
                    .attr("d","M 77.5 7 L 100.5 7 L 121.5 13 Q 140.6 21.9 153 37.5 Q 163.2 49.8 168 67.5 L 170 78.5 L 170 97.5 Q 164.3 130.3 143.5 148 Q 131.5 159 114.5 165 L 101.5 168 L 84.5 169 L 83.5 168 L 70.5 167 L 53.5 161 Q 37.9 153.1 27 140.5 Q 15.5 127.5 10 108.5 L 8 98.5 L 8 76.5 Q 13.9 45.4 33.5 28 Q 49.9 11.9 77.5 7 Z M 78 12 Q 52 17 37 32 Q 18 48 13 78 L 13 99 L 16 112 Q 21 127 31 138 Q 43 151 62 159 L 85 164 L 102 163 L 114 160 Q 129 154 141 144 L 156 125 L 162 111 L 165 97 L 165 79 L 163 69 Q 159 52 149 41 Q 136 24 116 16 L 100 12 L 78 12 Z ")
    ;

    viz.selectAll("g")
        .append("path")
            .attr("class","path")
            .attr("stroke", "#FFFFFF")
            .attr("stroke-width", 2)
            .attr("opacity",1)
            .attr("d","M 89.5 36 L 92 36.5 L 92 86.5 L 93 87.5 L 94 100.5 L 99.5 107 L 101.5 108 L 118.5 108 L 124.5 106 L 127 103.5 L 119 82.5 L 124.5 74 L 127 76.5 L 132 88.5 L 133 104.5 Q 130.9 111.9 125.5 116 L 113.5 119 L 101.5 119 Q 94.5 117.5 91 112.5 Q 86.4 107.1 86.5 97 L 82 106.5 L 74.5 114 Q 64.3 122.5 44 120 Q 42.9 117.3 45.5 118 L 65.5 109 L 73 103.5 L 72 97.5 L 66 86.5 L 42 53.5 L 42 48.5 L 44.5 44 L 59 54 Q 60 58.3 57 59.5 L 75 88.5 L 76 101 L 79 99.5 L 85 88.5 L 85 49.5 Q 82.5 48 84 42.5 L 89.5 36 Z ")
    ;

    viz.selectAll("g")
        .append("path")
            .attr("class","path")
            .attr("stroke", "#FFFFFF")
            .attr("stroke-width", 2)
            .attr("opacity",1)
            .attr("d","M 126.5 123 L 136 131.5 L 129.5 139 L 121 132 L 121 129.5 L 126.5 123 Z ")
    ;

    viz.selectAll("g")
        .append("path")
            .attr("class","path")
            .attr("stroke", "#FFFFFF")
            .attr("stroke-width", 2)
            .attr("opacity",1)
            .attr("d","M 110 124 L 120 131.5 L 120 133.5 L 114.5 140 L 105 131.5 L 110 124 Z ")
    ;
}

function update() {

}

d3.json("data.json").then(gotData);


{/* <svg viewBox="0 0 178 173" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#000000"  stroke="none" opacity="1" d="M 77.5 7 L 100.5 7 L 121.5 13 Q 140.6 21.9 153 37.5 Q 163.2 49.8 168 67.5 L 170 78.5 L 170 97.5 Q 164.3 130.3 143.5 148 Q 131.5 159 114.5 165 L 101.5 168 L 84.5 169 L 83.5 168 L 70.5 167 L 53.5 161 Q 37.9 153.1 27 140.5 Q 15.5 127.5 10 108.5 L 8 98.5 L 8 76.5 Q 13.9 45.4 33.5 28 Q 49.9 11.9 77.5 7 Z M 78 12 Q 52 17 37 32 Q 18 48 13 78 L 13 99 L 16 112 Q 21 127 31 138 Q 43 151 62 159 L 85 164 L 102 163 L 114 160 Q 129 154 141 144 L 156 125 L 162 111 L 165 97 L 165 79 L 163 69 Q 159 52 149 41 Q 136 24 116 16 L 100 12 L 78 12 Z "/><path fill="#000000"  stroke="none" opacity="1" d="M 89.5 36 L 92 36.5 L 92 86.5 L 93 87.5 L 94 100.5 L 99.5 107 L 101.5 108 L 118.5 108 L 124.5 106 L 127 103.5 L 119 82.5 L 124.5 74 L 127 76.5 L 132 88.5 L 133 104.5 Q 130.9 111.9 125.5 116 L 113.5 119 L 101.5 119 Q 94.5 117.5 91 112.5 Q 86.4 107.1 86.5 97 L 82 106.5 L 74.5 114 Q 64.3 122.5 44 120 Q 42.9 117.3 45.5 118 L 65.5 109 L 73 103.5 L 72 97.5 L 66 86.5 L 42 53.5 L 42 48.5 L 44.5 44 L 59 54 Q 60 58.3 57 59.5 L 75 88.5 L 76 101 L 79 99.5 L 85 88.5 L 85 49.5 Q 82.5 48 84 42.5 L 89.5 36 Z "/><path fill="#000000"  stroke="none" opacity="1" d="M 126.5 123 L 136 131.5 L 129.5 139 L 121 132 L 121 129.5 L 126.5 123 Z "/><path fill="#000000"  stroke="none" opacity="1" d="M 110 124 L 120 131.5 L 120 133.5 L 114.5 140 L 105 131.5 L 110 124 Z "/></svg> */}