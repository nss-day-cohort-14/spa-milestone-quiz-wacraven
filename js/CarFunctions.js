var CarLot = (function (carLot) {

	var divContainer = document.getElementsByClassName('container').item(0)



  carLot.cardBuilder = function(parsedObj) {
    for (var i = 0; i < parsedObj.length; i++) {
    	var avail;
    	if (parsedObj[i].purchased == false) {
    		avail = "Available now!"
    	}
			var newDiv = document.createElement(`div`);
			var content = `
				<h3 class='shipHeader'>${parsedObj[i].model}</h3>
				<img src="${parsedObj[i].img}">
				<p>Manufacturer: ${parsedObj[i].make}</p>
				<p>Year: ${parsedObj[i].year}</p>
				<p class="color">Color: ${parsedObj[i].color}</p>
				<p>Price: ${parsedObj[i].price} credits</p>
				<p class='shipAvail'>${avail}</p>
				<p class='description'>${parsedObj[i].description}</p>
				`
			newDiv.innerHTML = content;
			newDiv.setAttribute('class', 'col-md-4 shipCard');
			divContainer.appendChild(newDiv);
    }
		var card = document.getElementsByClassName('shipCard');
		carLot.eventListeners(card, parsedObj); //send card vaule to eventlisteners.js
  }

  return carLot;
  
})(CarLot || {});