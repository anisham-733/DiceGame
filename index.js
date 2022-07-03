function randomDiceChanger() {


	var randomNum1 = Math.floor(Math.random() * 6) + 1;
	

	// this will generate a number btw 0 and 5, hence added 1 

	var randomDiceImage1 = "dice" + randomNum1 + ".png";

	// Now changing attribute value of src of img
	var randomImageSource1 = "images/" + randomDiceImage1;

	var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// ******************************************************************************************************
	
	var randomNum2 = Math.floor(Math.random() * 6) + 1;

	// this will generate a number btw 0 and 5, hence added 1 

	var randomDiceImage2 = "dice" + randomNum2 + ".png";

	// Now changing attribute value of src of img
	var randomImageSource2 = "images/" + randomDiceImage2;
	var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// *********************************************************************************************************

	if (randomNum1 > randomNum2) {
		document.querySelector("h1").textContent = "Player1 wins🚩"
	}
	
	else if (randomNum1 == randomNum2) {
		document.querySelector("h1").textContent = "Draw"
	}
	
	else {
		document.querySelector("h1").textContent = "Player2 wins🚩"

	}
} 
