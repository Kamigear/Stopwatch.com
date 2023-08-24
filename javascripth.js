window.onload = function () {
	var seconds = 0;
	var tens = 0;
	var appendTens = document.getElementById('tens');
	var appendSeconds = document.getElementById('seconds');
	var buttonStart = document.getElementById('button-start');
	var buttonStop = document.getElementById('button-stop');
	var buttonReset = document.getElementById('button-reset');
	var interval;

	buttonStart.onclick = function (){
		clearInterval(interval);
		interval = setInterval(startTimer,10);
	}
	buttonStop.onclick = function (){
		clearInterval(interval);
	}
	buttonReset.onclick = function (){
		clearInterval(interval);
		tens = "00";
		seconds = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
	}

}