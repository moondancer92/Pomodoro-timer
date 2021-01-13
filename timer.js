const timerNumber = document.querySelector(".js-timer_number"),
	timerStart = document.querySelector(".timer_start"),
	timerPause = document.querySelector(".timer_puase"),
	timerReset = document.querySelector(".timer_reset"),
	timerStatus = document.querySelector(".js-timer_stauts");


const eventHandler = {
	
	startTimer:	function () {
			if(!eventHandler.startTimer.start){	
			startTime = new Date().getTime();
			tInterval = setInterval(eventHandler.getShowTime, 1000);
			start = true;
			}
			else {
			}
			
	},
	puauseTimer: function (){
		if(start){
			clearInterval(tInterval)
			eventHandler.startTimer.savedTime = difference
			start = false;
			timerPause.innerText = 'restart'
	// pause the clock
		}
		else if (!eventHandler.startTimer.savedTime) {
	// prevent pause button				
		}
		else {
			eventHandler.startTimer();
			timerPause.innerText ='pause'
		}
	// restart the clock	
	},

	resetTimer:function (){
		if(!tInterval){
		
		}
		else{
			clearInterval(tInterval)
			savedTime = null
			timerNumber.innerText ="00:00:00" 
			start =false;
			timerPause.innerText ='pause'
	
		}
	},

	getShowTime:function () {
		updatedTime = new Date().getTime();
		if(!eventHandler.startTimer.savedTime){
		difference = updatedTime - startTime;
		}
		else{
		difference = eventHandler.startTimer.savedTime + updatedTime - startTime;
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
		
		eventHandler.pomodoroEvt()
	},

	pomodoroEvt:function (){
		if(!this.takeBreak){
			timerStatus.innerText = 'Working Time!'
			if(seconds == 10){
				eventHandler.resetTimer();
				timerStatus.innerText = 'Take a Break'
				this.takeBreak = true
				eventHandler.startTimer();
			}	
			//when working
		}
		else{
			if(seconds == 10){
				eventHandler.resetTimer();
				timerStatus.innerText = 'Working Time!'
				eventHandler.startTimer();
				this.takeBreak = false
			}
			//when taking a break
		}
		}
		
}

function btnEvt() {
	
	timerStart.addEventListener("click", eventHandler.startTimer);
	timerPause.addEventListener("click",eventHandler.puauseTimer);
	timerReset.addEventListener("click",eventHandler.resetTimer);
}

function init() {
	btnEvt();
	}
	


init();
