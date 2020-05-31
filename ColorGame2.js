var numberofColors = 12;
var colors = generateRandomColors(numberofColors);
var squares = document.querySelectorAll('.square');
var circles = document.querySelectorAll('.circle');
var pickedColor = pickColor();
var answer = document.getElementById('answer');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var insaneBtn = document.querySelector('#insaneBtn');
var dont_messBtn = document.querySelector('#dont_messBtn');
var answerList = []
var pastClickedColor = ''

answer.textContent = pickedColor;

easyBtn.addEventListener('click', function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	insaneBtn.classList.remove('selected');
	numberofColors = 4;
	colors = generateRandomColors(numberofColors);
	pickedColor = pickColor();
	answer.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block'
		}
		else{
			squares[i].style.display = 'none';
		}
	}
})

hardBtn.addEventListener('click', function(){
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	insaneBtn.classList.remove('selected');
	numberofColors = 8;
	colors = generateRandomColors(numberofColors);
	pickedColor = pickColor();
	answer.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block'
		}
		else{
			squares[i].style.display = 'none';
		}
	}
})

insaneBtn.addEventListener('click', function(){
	insaneBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	hardBtn.classList.remove('selected');
	numberofColors = 12;
	colors = generateRandomColors(numberofColors);
	pickedColor = pickColor();
	answer.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
		}
})

resetButton.addEventListener('click', function(){
	//generate all new colors
	colors = generateRandomColors(numberofColors)
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	answer.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors'
})

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function(){
		//grab color of clicked square,
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = 'Correct!';
			changeColors(pickedColor);
			if (answerList.length > 9){
				answerList.shift();
			}
			if (!answerList.includes(pickedColor)){
				answerList.push(pickedColor);
			}
			console.log(answerList)
			for (var i = 0; i < answerList.length; i++){
					circles[i].style.backgroundColor = answerList[i];
					circles[i].innerHTML = (answerList[i]);
					circles[i].style.display = 'block';
				}
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = 'Play Again?'
			}
		else{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again!';
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < colors.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);	
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g + ", " + b + ")"; 
}

/*The storage part*/