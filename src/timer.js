var pomInterval;
var timeGlobal;
var intervalCount;
var stopPressed = false;
var pomPressed = false;
var pomCount = 0;
var breakPressed = false;
var audio = new Audio("daydream.mp3");


function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	intervalCount = 0;

		timeGlobal = timer;
		console.log(timer);
		pomInterval = setInterval(function(){

		console.log("Interval!!!");
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.style.fontSize = "350%";
		display.innerHTML = minutes + ":" + seconds;

		intervalCount ++;
		
		
		if (--timer < 0){
			clearInterval(pomInterval);
		//	timer = duration;
			display.style.fontSize = "350%";		
			display.textContent = "00:00";

			if (!stopPressed){
				//playSound()
				if(pomPressed){
				display.style.fontSize = "100%";
				display.innerHTML = "Pomodoro completed.<br/> Nice job!"
				audio.play();	
				pomCount++;
				countPom();
				console.log("pomCount " + pomCount);
				pomPressed = false;
				}
				else if(breakPressed){
					display.style.fontSize = "100%";
					display.innerHTML = "Time's up.<br/>Back to work!"
					audio.play();
					breakPressed = false;
				}		
			}

		}

		
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
	console.log("timeglobal" + timeGlobal);
	display = document.querySelector('#time');
	var resumeInterval = timeGlobal - intervalCount;
	//pomInterval = resumeInterval;
	if (timeGlobal == null || resumeInterval < 0){
		//resumeInterval = 6;
		//breakPressed = false;
		//stopPressed = false;
		//pomPressed = true;
		startPomodoroz();
	}
	else{
	startTimer(resumeInterval, display);
	}
	}




		//setInterval()
	
	//setInterval(window.pomodoTimer) = pausedTimer;
	//docuument.querySelector('#time');
//}



function startPomodoroz() {
	clearInterval(pomInterval);
	var twentyFiveMinutes = 6 * 1;
	display = document.querySelector('#time');
	breakPressed = false;
	stopPressed = false;
	pomPressed = true;
	startTimer(twentyFiveMinutes, display);
	
};

function startShortBreak(){
	clearInterval(pomInterval);
		var fiveMinutes = 6 * 5;
		display = document.querySelector('#time');
		pomPressed = false;
		stopPressed = false;
		breakPressed = true;
		startTimer(fiveMinutes, display);
		
};

function startLongBreak(){
	clearInterval(pomInterval);
	var tenMinutes = 60 *10;
	display = document.querySelector('#time');
	pomPressed=false;
	stopPressed = false;
	breakPressed = true;
	startTimer(tenMinutes, display);
};


//function getPomCount()
function countPom(){
	document.getElementById('numberOfPoms').innerHTML = pomCount;
};





