const timerNumber = document.querySelector(".js-timer_number"),
	timerStart = document.querySelector(".timer_start"),
	timerStop = document.querySelector(".timer_stop"),
	timerReset = document.querySelector(".timer_reset");

const SAVEDTIME_LS = "savedTime";

const savedTime = localStorage.getItem(SAVEDTIME_LS);

function startTimer() {
	startTime = new Date().getTime();
	tInterval = setInterval(getShowTime, 1000);
}

function stopTime() {
	const savedTime = localStorage.getItem(SAVEDTIME_LS);
	if (savedTime !== null) {
		startTimer();
	} else {
		clearInterval(tInterval);
		saveTime();
	}
}

function restTimer() {
	localStorage.removeItem(SAVEDTIME_LS);
}

function getShowTime() {
	updatedTime = new Date().getTime();
	const savedTime = localStorage.getItem(SAVEDTIME_LS);
	const parsedSavedTime = JSON.parse(savedTime);
	if (savedTime !== null) {
		difference = updatedTime - startTime + parsedSavedTime;
	} else {
		difference = updatedTime - startTime;
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

function saveTime() {
	localStorage.setItem(SAVEDTIME_LS, difference);
}

function timerhandler() {
	timerStart.addEventListener("click", startTimer);
	timerStop.addEventListener("click", stopTime);
	timerReset.addEventListener("click", restTimer);
}

function init() {
	timerhandler();
}

init();
