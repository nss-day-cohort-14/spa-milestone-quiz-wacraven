var CarLot = (function (carLot) {

  carLot.loadInventory = function() {
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener("load", carLot.loadSuccess);
    xhrRequest.addEventListener("error", carLot.loadError);
    xhrRequest.open("GET", "/js/json/inventory.json");
    xhrRequest.send();
  };

  carLot.loadSuccess = function() {
    var parsedJSON = JSON.parse(this.responseText);
    var parsedObj = parsedJSON.cars
    // console.log("Parsed JSON:", parsedJSON);
    // console.log("Parsed Object:", parsedObj);
    CarLot.cardBuilder(parsedObj);
    return parsedObj;
  };

  // carLot.parsedJSON = function(parsed) {
  //   var parsedObj = parsed
  // };

  carLot.loadError = function() {
    console.log("Error loading JSON file");
  };

  return carLot;
  
})(CarLot || {});