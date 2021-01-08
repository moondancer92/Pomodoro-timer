const timerNumber = document.querySelector(".js-timer_number"),
	timerStart = document.querySelector(".timer_start"),
	timerPause = document.querySelector(".timer_puase"),
	timerReset = document.querySelector(".timer_reset");

let difference;
let savedTime;
let start = false;


function btnEvt() {
	
	timerStart.addEventListener("click", startTimer);
	timerPause.addEventListener("click",puauseTimer);
	timerReset.addEventListener("click",resetTimer);
}
function startTimer() {
	startTime = new Date().getTime();
	if(!start){
	tInterval = setInterval(getShowTime, 1000);
	start = true;
	}
	else{

	}
	// start the clock 
}
function puauseTimer(){
	if(start){
		clearInterval(tInterval)
		savedTime = difference
		start = false;
		timerPause.innerText = 'restart'
// pause the clock
	}
	else if (!savedTime) {
// prevent pause button				
	}
	else {
		startTimer();
		timerPause.innerText ='pause'
	}
// restart the clock	
}

function resetTimer(){
	clearInterval(tInterval)
	savedTime = null
	timerNumber.innerText ="00:00:00" 
	start =false;
}

function getShowTime() {
	updatedTime = new Date().getTime();
	if(!savedTime){
	difference = updatedTime - startTime;
	}
	else{
		difference = savedTime + updatedTime - startTime;
	}

	let hours = Math.floor(
		(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((difference % (1000 * 60)) / 1000);
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	timerNumber.innerHTML = hours + ":" + minutes + ":" + seconds;
}


function init() {
	btnEvt();
}

init();
