const clock = document.getElementById("clock");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - (startTime || Date.now());
  timerInterval = setInterval(() => {
    const elapsed = new Date(Date.now() - startTime);
    clock.innerHTML = formatTime(elapsed.getMinutes()) + ":" + formatTime(elapsed.getSeconds()) + ":" + formatTime(elapsed.getMilliseconds() / 10);
  }, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  startTime = 0;
  clock.innerHTML = "00:00:00";
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
