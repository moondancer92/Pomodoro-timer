const timerNumber = document.querySelector(".js-timer_number"),
	timerStart = document.querySelector(".timer_start"),
	timerPause = document.querySelector(".timer_puase"),
	timerReset = document.querySelector(".timer_reset"),
	timerStatus = document.querySelector(".js-timer_stauts"),
	input_cycle = document.querySelector(".js-input_cycle"),
	form_cycle = document.querySelector(".js-timer_cycle"),
	cycle_number = document.querySelector(".js-timer_cycle_number"),
	count_number = document.querySelector(".js-timer_count_number"),
	remain_number = document.querySelector(".js-timer_remain_number");

count = 0;

const pomdSystem ={

	handleCycleSubmit: function (evt) {
		evt.preventDefault()
		currentValue = parseInt(input_cycle.value)*2;
		pomdSystem.paintCycle(currentValue)
		eventHandler.startTimer();
	},

	paintCycle :function (number) {
		if(!number){
		}
		else{
		cycle_number.innerText =`Working hour: ${number/2} h`
		}	
	}
}	
	

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
		count_number.innerText =`finished cycle : ${count}`
		if(!currentValue){

		}else{
		const remainNumber = currentValue - count
		console.log(remainNumber);
		remain_number.innerHTML = `remain cycle : ${remainNumber}`
		}
		if(!this.takeBreak){
			timerStatus.innerText = 'Working Time!'
			if(minutes == 25){
				eventHandler.resetTimer();
				timerStatus.innerText = 'Take a Break'
				count++;
				this.takeBreak = true
				eventHandler.startTimer();
				
			}	
			// work to break
		}
		else{
			if(minutes == 5){
				if(count === currentValue){
					eventHandler.resetTimer();
					timerStatus.innerText = 'jobs done!'
					this.takeBreak = false
					count = 0;
				}
				else{
					eventHandler.resetTimer();
					timerStatus.innerText = 'Working Time!'
					eventHandler.startTimer();
					this.takeBreak = false
					
				}
			}

		}
		//break to work
	}	
		
}

function btnEvt() {
	form_cycle.addEventListener("submit",pomdSystem.handleCycleSubmit);
	timerStart.addEventListener("click", pomdSystem.handleCycleSubmit);
	timerPause.addEventListener("click",eventHandler.puauseTimer);
	timerReset.addEventListener("click",eventHandler.resetTimer);
}

function init() {
	btnEvt();
	
	}
	


init();
