var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var choice = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupPlay();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}
}

function setupPlay(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				choice.textContent = "Correct!!";
				newGame.textContent = "Play Again?";
				h1.style.backgroundColor = pickedColor;
				correctColor(clickedColor);
			}
			else{
				this.style.backgroundColor = "#232323";
				choice.textContent = "Try Again!!";
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numberOfSquares);
	//Pick a new random Color from the array
	pickedColor = randomPickFromArray();
	//Change color Display
	colorDisplay.textContent = pickedColor;
	newGame.textContent = "New colors";
	choice.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display ="none" ;
		}
	}
	h1.style.backgroundColor = "steelblue";
}


// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares =3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = randomPickFromArray();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
		// if(colors[i]){
		// 	squares[i].style.backgroundColor = colors[i];
		// }
		// else{
		// 	squares[i].style.display ="none" ;
		// }
// 	}
// 	h1.style.backgroundColor = "steelblue";
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = randomPickFromArray();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display ="block" ;
// 	}
// 	h1.style.backgroundColor = "steelblue";
// })


newGame.addEventListener("click",function() {
	// colors = generateRandomColors(numberOfSquares);
	// //Pick a new random Color from the array
	// pickedColor = randomPickFromArray();
	// //Change color Display
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New colors";
	// choice.textContent = "";

	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";

	reset();
});




function correctColor(argument) {
	// body...
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = argument;
	}
	
}

function randomPickFromArray() {
	// body...
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



function generateRandomColors(number) {
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < number; i++){
		//Get random color and push into array;
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	// Pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// Pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// Pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
