let data = 
    [
        {
            "timestamp": "2019-09-03T14:44:28.271Z",
            "GrilledCheese": 3,
            "friedrice": 7,
            "xiaolongbao": 5,
            "burgers": 2
        },
        {
            "timestamp": "2019-09-03T14:44:36.101Z",
            "GrilledCheese": 2,
            "friedrice": 2,
            "xiaolongbao": 8,
            "burgers": 4
        },
        {
            "timestamp": "2019-09-03T14:45:10.480Z",
            "GrilledCheese": 2,
            "friedrice": 3,
            "xiaolongbao": 4,
            "burgers": 1
        },
        {
            "timestamp": "2019-09-04T05:48:07.519Z",
            "GrilledCheese": 10,
            "friedrice": 10,
            "xiaolongbao": 7,
            "burgers": 10,
            "dumpling": 8
        },
        {
            "timestamp": "2019-09-04T05:48:11.427Z",
            "GrilledCheese": 7,
            "friedrice": 5,
            "xiaolongbao": 6,
            "burgers": 1,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:48:11.509Z",
            "GrilledCheese": 7,
            "friedrice": 9,
            "xiaolongbao": 10,
            "burgers": 1,
            "dumpling": 8
        },
        {
            "timestamp": "2019-09-04T05:48:15.178Z",
            "GrilledCheese": 10,
            "friedrice": 10,
            "xiaolongbao": 4,
            "burgers": 10,
            "dumpling": 10
        },
        {
            "timestamp": "2019-09-04T05:48:19.690Z",
            "GrilledCheese": 5,
            "friedrice": 10,
            "xiaolongbao": 8,
            "burgers": 8,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:48:23.595Z",
            "GrilledCheese": 1,
            "friedrice": 10,
            "xiaolongbao": 10,
            "burgers": 10,
            "dumpling": 5
        },
        {
            "timestamp": "2019-09-04T05:48:32.244Z",
            "GrilledCheese": 10,
            "friedrice": 10,
            "xiaolongbao": 9,
            "burgers": 1,
            "dumpling": 8
        },
        {
            "timestamp": "2019-09-04T05:48:35.279Z",
            "GrilledCheese": 10,
            "friedrice": 9,
            "xiaolongbao": 8,
            "burgers": 10,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:48:36.009Z",
            "GrilledCheese": 10,
            "friedrice": 10,
            "xiaolongbao": 9,
            "burgers": 10,
            "dumpling": 9
        },
        {
            "timestamp": "2019-09-04T05:48:40.293Z",
            "GrilledCheese": 10,
            "friedrice": 10,
            "xiaolongbao": 10,
            "burgers": 10,
            "dumpling": 10
        },
        {
            "timestamp": "2019-09-04T05:48:40.671Z",
            "GrilledCheese": 8,
            "friedrice": 8,
            "xiaolongbao": 7,
            "burgers": 9,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:49:14.027Z",
            "GrilledCheese": 1,
            "friedrice": 10,
            "xiaolongbao": 1,
            "burgers": 10,
            "dumpling": 1
        }
    ]
    


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

  let transformedData = averageData(data);
  console.log(transformedData);

  for (let i=0; i<transformedData.length;i++){
      let datapoint = transformedData[i];
      let food = datapoint.name;
      let average = datapoint.average;

      let bar = document.createElement("div");
      let barname = document.createElement("p");
      barname.innerHTML = food;

      bar.className = "bar";
      bar.style.width = average * 50 + "px";

      bar.appendChild(barname);
      document.body.appendChild(bar);
  }