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
    carLot.cardBuilder(parsedObj);
    return parsedObj;
  };

  carLot.loadError = function() {
    console.log("Error loading JSON file");
  };

  carLot.loadInventory();

  return carLot;
  
})(CarLot || {});