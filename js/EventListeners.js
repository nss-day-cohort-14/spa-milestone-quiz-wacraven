var CarLot = (function (carLot) {

	carLot.eventListeners = function(card, parsedObj) {
		for (var i = 0; i < card.length; i++) {
			var currentColor = parsedObj[i].color;
			var currentCard = card.item(i);
			currentCard.addEventListener("click", function(){	//Add event listener for selector
				var clearSelected = document.getElementsByClassName('selected')
				for (var i = 0; i < clearSelected.length; i++) { // loop through items on the page to check for other 'selected' classes and remove them
					clearSelected[i].classList.remove('selected');
				}
				this.classList.add('selected'); // add selected class to clicked item
				var inputBox = document.getElementById('inputBox')
				inputBox.focus();
			});
		}
		var inputBox = document.getElementById('inputBox')
		inputBox.addEventListener("keyup", function(key) {
			var selectedCard = document.getElementsByClassName('selected').item(0);
			var getDesc = selectedCard.getElementsByClassName('description').item(0)
			getDesc.innerText = inputBox.value;
			if (key.keyCode === 13) {
				inputBox.value = "";
			}
		})

	}

	return carLot

})(CarLot || {});