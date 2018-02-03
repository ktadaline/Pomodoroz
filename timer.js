function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	window.pomodoroTimer = setInterval(function(){
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = "You have " + minutes + ":" + seconds + " minutes remaining.";
			
		
		if (--timer < 0){
			clearInterval(window.pomodoroTimer);
		//	timer = duration;
			display.textContent = "Beeeeep!";
		}
	}, 1000);
	
}


function stop() {
	var stop = 60 * 0;		
	clearInterval(window.pomodoroTimer);
	display = document.querySelector('#time');
	startTimer(stop, display);
}

var pausedTimer; 

function pause(){
	pausedTimer = window.pomodoroTimer;
	clearInterval(window.pomodoroTimer);
	document.querySelector('#time');
	
	}

function resume(){
	window.pomodoTimer = pausedTimer;
	docuument.querySelector('#time');
}



function startPomodoroz() {
	clearInterval(window.pomodoroTimer);
	var twentyFiveMinutes = 60 * 25;
	display = document.querySelector('#time');
	startTimer(twentyFiveMinutes, display);
	
};

function startShortBreak(){
	clearInterval(window.pomodoroTimer);
		var fiveMinutes = 60 * 5;
		display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
		
};

function startLongBreak(){
	clearInterval(window.pomodoroTimer);
	var tenMinutes = 60 *10;
	display = document.querySelector('#time');
	startTimer(tenMinutes, display);
};



