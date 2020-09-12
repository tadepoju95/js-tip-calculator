let calculateTotal = () => {
	let userInput = document.getElementById('getNumbers').value;
	let userPercent = document.getElementById('getPercent').value;
	let calculateTipPercent = document.getElementById('getTipPercent').innerHTML = userPercent / 100 + 1;
	let total = document.getElementById('userTotal').innerHTML = userInput * calculateTipPercent;
	let roundDecimal = total.toFixed(2);
	if(roundDecimal) {
		document.getElementById('result').innerHTML = 'Total is : ' + '$' + roundDecimal;
	}
}

let tipOne = () => {
	let userInput = document.getElementById('getNumbers').value;
	let total = document.getElementById('userTotal').innerHTML = userInput * 1.05;
	if(total) {
		document.getElementById('result').innerHTML = 'Total is : ' + '$' + total;
	}
}

let tipTwo = () => {
	let userInput = document.getElementById('getNumbers').value;
	let total = document.getElementById('userTotal').innerHTML = userInput * 1.10;
	if(total) {
		document.getElementById('result').innerHTML = 'Total is : ' + '$' + total;
	}
}

let tipThree = () => {
	let userInput = document.getElementById('getNumbers').value;
	let total = document.getElementById('userTotal').innerHTML = userInput * 1.15;
	if(total) {
		document.getElementById('result').innerHTML = 'Total is : ' + '$' + total;
	}
}

let tipFour = () => {
	let userInput = document.getElementById('getNumbers').value;
	let total = document.getElementById('userTotal').innerHTML = userInput * 1.20;
	if(total) {
		document.getElementById('result').innerHTML = 'Total is : ' + '$' + total;
	}
}