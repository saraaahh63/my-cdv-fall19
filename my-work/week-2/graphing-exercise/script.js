let data = 
    [
        [
            {
                "timestamp": "2019-09-11T05:24:56.842Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:01.321Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:06.926Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:11.405Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:15.684Z",
                "Fried Rice": 3,
                "Pizza": 1,
                "Grilled Cheese": 3,
                "Xiaolongbao": 1
            },
            {
                "timestamp": "2019-09-11T05:25:20.826Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:26.011Z",
                "Fried Rice": 1,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:30.251Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:34.370Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:38.610Z",
                "Fried Rice": 8,
                "Pizza": 5,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:43.280Z",
                "Fried Rice": 3,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            },
            {
                "timestamp": "2019-09-11T05:25:47.640Z",
                "Fried Rice": 4,
                "Pizza": 8,
                "Grilled Cheese": 3,
                "Xiaolongbao": 5
            }
        ]
    ]
    


function averageData(data){
    let newData = [];
    let keys = Object.keys(data[0]);
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