function Square(){

    document.getElementById("squarecontainer").innerHTML = " ";
  
    var num = document.getElementById("numofsquares").value;
  
    for(var i = 0; i < num; i ++){
      var square = document.createElement("DIV");
      square.className = "square";
      document.getElementById("squarecontainer").appendChild(square);
    }
  
  }