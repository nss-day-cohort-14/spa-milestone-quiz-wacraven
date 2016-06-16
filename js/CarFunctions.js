var CarLot = (function (carLot) {

	var divContainer = document.getElementsByClassName('container').item(0)



  carLot.cardBuilder = function(parsedObj) {
    console.log(parsedObj);
		console.log(divContainer);
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
				<p>Color: ${parsedObj[i].color}</p>
				<p>Price: ${parsedObj[i].price} credits</p>
				<p class='shipAvail'>${avail}</p>
				<p>${parsedObj[i].description}</p>
				<p></p>
				<p></p>
				`
			newDiv.innerHTML = content;
			newDiv.setAttribute('class', 'col-md-4 shipCard');
			divContainer.appendChild(newDiv);
    }
  }

  return carLot;
  
})(CarLot || {});