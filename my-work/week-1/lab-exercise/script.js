let data = 
    [
        {
            "timestamp": "2019-09-03T14:44:28.271Z",
            "milkTea": 3,
            "ramen": 7,
            "spaghettiBolognese": 5,
            "mango": 2
        },
        {
            "timestamp": "2019-09-03T14:44:36.101Z",
            "milkTea": 2,
            "ramen": 2,
            "spaghettiBolognese": 8,
            "mango": 4
        },
        {
            "timestamp": "2019-09-03T14:45:10.480Z",
            "milkTea": 2,
            "ramen": 3,
            "spaghettiBolognese": 4,
            "mango": 1
        },
        {
            "timestamp": "2019-09-04T05:48:07.519Z",
            "milkTea": 10,
            "ramen": 10,
            "spaghettiBolognese": 7,
            "mango": 10,
            "dumpling": 8
        },
        {
            "timestamp": "2019-09-04T05:48:11.427Z",
            "milkTea": 7,
            "ramen": 5,
            "spaghettiBolognese": 6,
            "mango": 1,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:48:11.509Z",
            "milkTea": 7,
            "ramen": 9,
            "spaghettiBolognese": 10,
            "mango": 1,
            "dumpling": 8
        },
        {
            "timestamp": "2019-09-04T05:48:15.178Z",
            "milkTea": 10,
            "ramen": 10,
            "spaghettiBolognese": 4,
            "mango": 10,
            "dumpling": 10
        },
        {
            "timestamp": "2019-09-04T05:48:19.690Z",
            "milkTea": 5,
            "ramen": 10,
            "spaghettiBolognese": 8,
            "mango": 8,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:48:23.595Z",
            "milkTea": 1,
            "ramen": 10,
            "spaghettiBolognese": 10,
            "mango": 10,
            "dumpling": 5
        },
        {
            "timestamp": "2019-09-04T05:48:32.244Z",
            "milkTea": 10,
            "ramen": 10,
            "spaghettiBolognese": 9,
            "mango": 1,
            "dumpling": 8
        },
        {
            "timestamp": "2019-09-04T05:48:35.279Z",
            "milkTea": 10,
            "ramen": 9,
            "spaghettiBolognese": 8,
            "mango": 10,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:48:36.009Z",
            "milkTea": 10,
            "ramen": 10,
            "spaghettiBolognese": 9,
            "mango": 10,
            "dumpling": 9
        },
        {
            "timestamp": "2019-09-04T05:48:40.293Z",
            "milkTea": 10,
            "ramen": 10,
            "spaghettiBolognese": 10,
            "mango": 10,
            "dumpling": 10
        },
        {
            "timestamp": "2019-09-04T05:48:40.671Z",
            "milkTea": 8,
            "ramen": 8,
            "spaghettiBolognese": 7,
            "mango": 9,
            "dumpling": 7
        },
        {
            "timestamp": "2019-09-04T05:49:14.027Z",
            "milkTea": 1,
            "ramen": 10,
            "spaghettiBolognese": 1,
            "mango": 10,
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