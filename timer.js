const timerNumber = document.querySelector(".js-timer_number"),
	timerStart = document.querySelector(".timer_start"),
	timerPause = document.querySelector(".timer_puase"),
	timerReset = document.querySelector(".timer_reset"),
	timerStatus = document.querySelector(".js-timer_stauts");

let start = false
let savedTime 
let difference 
let tInterval  
let takeBreak

function btnEvt() {
	
	timerStart.addEventListener("click", startTimer);
	timerPause.addEventListener("click",puauseTimer);
	timerReset.addEventListener("click",resetTimer);
}

function startTimer() {

	if(!start){	
		startTime = new Date().getTime();
		tInterval = setInterval(getShowTime, 1000);
		start = true;
		savedTime 
	}
	else {
	}

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
	if(!tInterval){
	
	}
	else{
		clearInterval(tInterval)
		savedTime = null
		timerNumber.innerText ="00:00:00" 
		start =false;
		timerPause.innerText ='pause'

	}
}

function getShowTime() {
	updatedTime = new Date().getTime();
	if(!savedTime){
	difference = updatedTime - startTime;
	}
	else{
	difference = savedTime + updatedTime - startTime;
	}

	hours = Math.floor(
		(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
 	minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	seconds = Math.floor((difference % (1000 * 60)) / 1000);
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	timerNumber.innerHTML = hours + ":" + minutes + ":" + seconds;
	
	pomodoroEvt();

}

function pomodoroEvt(){
	if(!takeBreak){
		timerStatus.innerText = 'Working Time!'
		if(seconds == 10){
			resetTimer();
			timerStatus.innerText = 'Take a Break'
			startTimer();
			 takeBreak = true
		}	
		//when working
	}
	else{
		
		if(seconds == 10){
			resetTimer();
			timerStatus.innerText = 'Working Time!'
			startTimer();
			takeBreak = false
		}
		//when taking a break
	}
	}




function init() {
	btnEvt();
	}
	


init();
