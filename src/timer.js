var pomInterval;
var timeGlobal;
var intervalCount;
var stopPressed = false;
var pomPressed = false;
var pomCount = 0;
var breakPressed = false;
var selected = "#200e27"
var unselected = "#2e1437";
var longBreak = document.getElementById('startLongBreakButton');
var shortBreak = document.getElementById('startShortBreakButton');
var pomButton = document.getElementById('startPomButton');
var pauseButton = document.getElementById('pause');
//var pomButton = document.getElementById('startPomButton');
var stringPomComplete = "Pomodoro completed.<br/> Nice job!";
var audio = new Audio("daydream.mp3");
var soundon = true;



function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	intervalCount = 0;
	//document.getElementById('pause').style.background = unselected;

		timeGlobal = timer;
		//console.log(timer);
		pomInterval = setInterval(function(){

		//console.log("Interval!!!");
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
				display.innerHTML = stringPomComplete;//"Pomodoro completed.<br/> Nice job!"		
				pomCount++;
				countPom();
				console.log("pomCount " + pomCount);
				pomPressed = false;
				audio.play();
				//pomButton.blur();
				
				//document.getElementById('startPomButton').style.background = unselected;
				}
				else if(breakPressed){
					display.style.fontSize = "100%";
					display.innerHTML = "Time's up.<br/>Back to work!"
					audio.play();
					//longBreak.blur();
					//shortBreak.blur();
					//document.getElementById('startLongBreakButton').style.background = unselected;
					//document.getElementById('startShortBreakButton').style.background = unselected;
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
	//pomButton.blur();
	//shortBreak.blur();
	//longBreak.blur();
	//pauseButton.blur();
	//document.getElementById('startPomButton').style.background = unselected;
	//document.getElementById('startLongBreakButton').style.background = unselected;
	//document.getElementById('startShortBreakButton').style.background = unselected;
}



function pause(){
	console.log(timeGlobal);
	document.querySelector('#time');
	console.log(intervalCount);
	clearInterval(pomInterval);
	//pauseButton.focus();
	//pause.focus();
	//if (pomPressed == true || breakPressed == true){
	//document.getElementById('pause').style.background = selected;

	//}
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
	//document.getElementById('pause').style.background = uselected;
	}
	}




		//setInterval()
	
	//setInterval(window.pomodoTimer) = pausedTimer;
	//docuument.querySelector('#time');
//}



function startPomodoroz() {
	clearInterval(pomInterval);
	var twentyFiveMinutes = 25 * 60;
	display = document.querySelector('#time');
	breakPressed = false;
	stopPressed = false;
	pomPressed = true;
	startTimer(twentyFiveMinutes, display);
	//pomButton.focus();
	//longBreak.blur();
	//shortBreak.blur();
	//document.getElementById('startPomButton').style.background = selected;
	//document.getElementById('startLongBreakButton').style.background = unselected;
	//document.getElementById('startShortBreakButton').style.background = unselected;

};

function startShortBreak(){
	clearInterval(pomInterval);
		var fiveMinutes = 5 * 60;
		display = document.querySelector('#time');
		pomPressed = false;
		stopPressed = false;
		breakPressed = true;
		startTimer(fiveMinutes, display);
		//pomButton.blur();
		//longBreak.blur();
		//shortBreak.focus();
		//document.getElementById('startPomButton').style.background = unselected;
		//document.getElementById('startLongBreakButton').style.background = unselected;
		//document.getElementById('startShortBreakButton').style.background = selected;
		
};

function startLongBreak(){
	clearInterval(pomInterval);
	var tenMinutes = 10 * 60;
	display = document.querySelector('#time');
	pomPressed=false;
	stopPressed = false;
	breakPressed = true;
	startTimer(tenMinutes, display);
	//document.getElementById('startPomButton').style.background = unselected;
	//longBreak.focus();
	//pomButton.blur();
	//shortBreakButton.blur();
	//document.getElementById('startLongBreakButton').style.background = selected;
	//document.getElementById('startShortBreakButton').style.background = unselected;
};


//function getPomCount()
function countPom(){
	document.getElementById('numberOfPoms').innerHTML = pomCount;
};

function soundbut(){

	if (soundon)
	{
	document.getElementById("soundButton").src = "pics/soundoff.png";
	soundon=false;
	audio.muted = true;
	//audio.pause();
	//audio = null;
	//audio.currentTime = 0.0;
	}


  else if (!soundon)
  {
	document.getElementById('soundButton').src = 'pics/soundon.png';
	soundon=true;
	audio.muted = false;
	//audio = new Audio("daydream.mp3");
  }
};


function randomNumber(){
var x = Math.floor((Math.random() * 10));
return x;
}

var backgrounds=[
"pics/purpleSunset.jpeg", 
"pics/duneNight.jpeg", 
"pics/starryDusk.png", 
"pics/purpleDusk.jpeg", 
"pics/mirroredPeaks.jpeg", 
"pics/coffee.jpeg", 
"pics/wheatContrast.jpeg", 
"pics/mistyPeaks.jpeg",
"pics/sunset.jpeg",
"pics/layers.jpeg"];

function randomBackground(){
	var x = randomNumber();
	var y = backgrounds[x];
	console.log(y);
}



//var body = document.querySelector('body');


//document.getElementsByTagName("body")[0].style = ('--background-pic', randomBackground());


//body.style.setProperty('--background-pic', randomBackground());












