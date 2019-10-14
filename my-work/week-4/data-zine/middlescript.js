let w = 2400;
let h = 800;

let viz = d3.select("#container")
  .append("svg")
    .attr("width",w)
    .attr("height",h)
    .style("background-color","black")
;

function getName(d,i){
  if (d.wordphrase == "yalla") {
    return "يلا"
  } if (d.wordphrase == "safar") {
    return "سفر"
  } if (d.wordphrase == "i9eer 5air"){
    return "يصير خير"
  } if (d.wordphrase == "mtabtab"){
    return "متبتب"
  } if (d.wordphrase == "shenme"){
    return "مصلحشية"
  } if (d.wordphrase == "Habibi") {
    return "什么"
  } if (d.wordphrase == "ashab") {
    return "اصحاب"
  } if (d.wordphrase == "keyi") {
    return "可以"
  } if (d.wordphrase == "Hadher") {
    return "حاضر"
  } if (d.wordphrase == "Ya3ni") {
    return "يعني"
  } if (d.wordphrase == "Aloo") {
    return "الو"
  } if (d.wordphrase == "Inshallah"){
    return "إن شاء الله"
  } if (d.wordphrase == "Enzein"){
    return "إنزين"
  } if (d.wordphrase == "dui") {
    return "对"
  } if (d.wordphrase == "9ij"){
    return "صيج"
  } if (d.wordphrase == "shfeek") {
    return "شفيك"
  } if (d.wordphrase == "weather"){
    return d.wordphrase
  } if (d.wordphrase == "chu qu wanr"){
    return "出去玩儿"
  }
}

let colorScale = d3.scaleSequential(d3.interpolateCool).domain([200,800]);

function getColor(d,i){
  if (d.context == "schoolwork") {
    num = 200
  } if (d.context == "schoolwork & family") {
    num = 300
  } if (d.context == "family"){
    num = 400
  } if (d.context == "others & family") {
    num = 500
  } if (d.context == "others"){
    num = 600
  } if (d.context == "all contexts"){
    num = 800
  }

  return colorScale(num);
}

let fontScale = d3.scaleLinear().domain([0,10]).range([10,200]);

function getFontSize(d,i){
  return fontScale(d.count) + "px";
}

let sizeScale = d3.scaleSqrt().domain([0,10]).range([20,200]);

function getSize(d,i){
  return sizeScale(d.count);
}

let xpadding = 60;
let xScale = d3.scaleLinear().domain([0,18]).range([200,2400-xpadding]);

function xPosition(d,i){
  return xScale(i) - xpadding;
}

let ypadding = 50;
let yScale = d3.scaleLinear().domain([0,20]).range([ypadding,800-(ypadding*8)]);

function yPosition(d,i){
  return yScale(d.count) * 3;
}

function getGroupTranslation(d, i){
  let trans =  "translate(" + xPosition(d,i) + "," + yPosition(d,i) + ")";
  console.log(trans);
  return trans;
}

function gotData(incomingData){

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .classed("datagroup",true)
  ;

  let phrasecontainers = datagroups.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", getSize)
    .attr("stroke", getColor)
    .attr("stroke-width", 5)
    .attr("fill","none")
  ;

  let phrases = datagroups.append("text")
    .text(getName)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .style("font-size", getFontSize)
    .attr("fill",getColor)
  ;

  datagroups.attr("transform", getGroupTranslation);


}

d3.json("data.json").then(gotData);