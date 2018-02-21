var pomInterval;
var timeGlobal;
var intervalCount;
var stopPressed = false;
var audio = new Audio("daydream.mp3");

/*function playAudio(){
	sound.play();
}*/
//var timer;

function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	intervalCount = 0;
	//window.pomodoroTimer 
	/*resumeButton.addEventListener("click", function(event){
		clearInterval(pomInterval);
*/
		timeGlobal = timer;
		console.log(timer);
		pomInterval = setInterval(function(){

		console.log("Interval!!!");
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = minutes + ":" + seconds;

		intervalCount ++;
		
		
		if (--timer < 0){
			clearInterval(pomInterval);
		//	timer = duration;
					
			display.textContent = "...";

			if (!stopPressed){
				//playSound()
				display.textContent = "Times up!"
				audio.play();			
			}

			stopPressed = false;
		}

/*
		pauseButton.addEventListener("click", function(event){
			clearInterval(pomInterval);
		});		*/
		
	}, 1000);
}




function stop() {
	
	var stop = 60 * 0;		
	clearInterval(pomInterval);
	display = document.querySelector('#time');
	stopPressed = true;
	startTimer(stop, display);
}



function pause(){
	console.log(timeGlobal);
	document.querySelector('#time');
	console.log(intervalCount);
	clearInterval(pomInterval);
	//pausedTimer = window.pomodoroTimer;
	
	//document.querySelector('#time');
	//document.querySelector('#time');
	//console.log(timeGLobal);
	}

function resume(){
	clearInterval(pomInterval);
	console.log(timeGlobal);
	document.querySelector('#time');
	var resumeInterval = timeGlobal - intervalCount;
	//pomInterval = resumeInterval;
	startTimer(resumeInterval, display);
	}
	//setInterval()
	
	//setInterval(window.pomodoTimer) = pausedTimer;
	//docuument.querySelector('#time');
//}



function startPomodoroz() {
	clearInterval(pomInterval);
	var twentyFiveMinutes = 60 * 25;
	display = document.querySelector('#time');
	startTimer(twentyFiveMinutes, display);
	
};

function startShortBreak(){
	clearInterval(pomInterval);
		var fiveMinutes = 60 * 5;
		display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
		
};

function startLongBreak(){
	clearInterval(pomInterval);
	var tenMinutes = 60 *10;
	display = document.querySelector('#time');
	startTimer(tenMinutes, display);
};



