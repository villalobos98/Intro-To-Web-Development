var numberOfSqures = 3;
var colors = generateRandomColors(numberOfSqures);
var squares = document.querySelectorAll(".square");
var winningColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy-btn");
var hardButton = document.querySelector("#hard-btn");

easyButton.addEventListener("click", function () {
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numberOfSqures = 3;
	colors = generateRandomColors(numberOfSqures);
	winningColor = pickColor();
	colorDisplay.textContent = winningColor;
	for (var i = 0; i < squares.length; i++) {
		//if there is a next color, if one even exists, change 
		//the current sqaure to the colors in the array
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#cd853f";

});

hardButton.addEventListener("click", function () {
	numberOfSqures = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(numberOfSqures);
	winningColor = pickColor();
	colorDisplay.textContent = winningColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.background = "#cd853f";

});


resetButton.addEventListener("click", function () {
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	winningColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = winningColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#cd853f";
});

colorDisplay.textContent = winningColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function () {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if (clickedColor === winningColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
