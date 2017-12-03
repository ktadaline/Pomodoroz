/*window.palmadoTimer = Timer();

MyTimer = {
	duration: 600,
	reset: function() {
		this.duration = 0;
	},
	setDuration: function(newDuration) {
		this.duration = newDuration
	},
	startTimer() {
		
	}
}

MyTimer.reset()
*/


function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	var theTimer = setInterval(function(){
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = "You have " + minutes + ":" + seconds + " minutes remaining.";
			
		
		if (--timer < 0){
			clearInterval(theTimer);
			timer = duration;
			display.textContent = "Beeeeep!";
		}
	}, 1000);
	
}

function reset(duration, display) {
clearInterval	
}
/*

window.onload = function () {
	var twentyFiveMinutes = 60 * 25,
		display = document.querySelector('#time');
	startTimer(twentyFiveMinutes, display);
	
}; 


//var startButton = document.getElementById('startButton');
*/


//window.document.getElementById('startButton').onclick = 

function startPomodoroz() {
	var twentyFiveMinutes = 60 * 25,
		display = document.querySelector('#time');
	startTimer(twentyFiveMinutes, display);
	
};


function startShortBreak(){
	var fiveMinutes = 6 * 1,
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
};

function startLongBreak(){
	var tenMinutes = 60 *10,
		display = document.querySelector('#time');
	startTimer(tenMinutes, display);
};

function reset(){
	clearInterval(theTimer);
	display = document.querySelector('#time');
	startTimer(display);
};

