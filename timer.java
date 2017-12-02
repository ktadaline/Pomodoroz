function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	var theTimer = setInterval(function(){
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = "Keep going! You have " + minutes + ":" + seconds + " minutes remaining.";
			
		
		if (--timer < 0){
			clearInterval(theTimer);
			timer = duration;
			display.textContent = "Beeeeep!";
		}
	}, 1000);
	
}
	


window.onload = function () {
	var twentyFiveMinutes = 60 * 25,
		display = document.querySelector('#time');
	startTimer(twentyFiveMinutes, display);
	
};